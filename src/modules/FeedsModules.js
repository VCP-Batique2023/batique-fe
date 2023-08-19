import { v4 } from 'uuid';
import { db, storage } from '@/modules/firebase_config';
import toast from 'react-hot-toast';
import {
  collection,
  getDoc,
  getDocs,
  setDoc,
  doc,
  Timestamp,
  limit,
  query,
  updateDoc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function likeHander(uid, feedId, setLikeCb){
  const feedRef = doc(db, 'feeds', `${feedId}`);
  const querySnapshot = await getDoc(feedRef);
  // console.log(feedId)
  if (querySnapshot.exists()) {
    const retrievedData = querySnapshot.data();
    
    const likedByAccount = [...retrievedData.likedByAccount];
    
    const index = likedByAccount.findIndex( likedBy => {
      return likedBy.trim() == uid
    });
    // const text = [...likedByAccount, uid];
    // console.log(typeof text)
    let updatedLike = [];
    if(index > -1){
      updatedLike = likedByAccount.filter( liked => {
        return liked.trim() != uid;
      });
    } else {
      updatedLike = [...likedByAccount, uid];
    }
    
    await updateDoc(feedRef, {
      likedByAccount: updatedLike,
    });

    return;
    // return cb(retrievedData);
  }

  // return cb(null);
}

async function checkImageOnMLAPI(selectedFile) {
  try {
    const reqData = new FormData();
    reqData.append('file', selectedFile);
    const response = await fetch(
      'https://batique-be-fyelvmf6sq-et.a.run.app/scan',
      {
        method: 'POST',
        body: reqData,
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function handleFirebaseUpload(
  caption,
  selectedFile,
  selectedFilePath,
  uid,
  setShowModalAddPostCb,
  setSelectedFileCb,
  setSelectedFilePathCb,
  setCaptionCb
) {
  const result = await checkImageOnMLAPI(selectedFile);
  if (!result.isBatik) {
    // Return something to trigger the toast
    toast.error('Silahkan upload gambar batik!');
    setShowModalAddPostCb(-1);
    return;
  }
  const imageRef = ref(storage, `feeds/${v4()}`);
  const storageSnapShot = await uploadBytes(imageRef, selectedFile);
  const publicUrl = await getDownloadURL(storageSnapShot.ref);

  await setDoc(doc(db, 'feeds', `username-${v4()}`), {
    caption: caption,
    createdAt: Timestamp.fromDate(new Date()),
    imageUrl: publicUrl,
    like: 0,
    userId: uid,
  });
  setShowModalAddPostCb(-1);
  setSelectedFileCb('');
  setSelectedFilePathCb('');
  setCaptionCb('Write your caption here!');
}

async function handleClientUpload(e, setSelectedFileCb, setSelectedFilePathCb) {
  const file = e.target.files[0];
  if (Math.round(file.size / 1048576) > 2) {
    console.log('Keep it under 2MB');
    return;
  }

  setSelectedFileCb(file);

  const reader = new FileReader();

  reader.onload = () => {
    setSelectedFilePathCb(reader.result);
  };

  reader.readAsDataURL(file);
}

// Listen on Feeds Collection Update
// function listenFeedsCollection(cb) {
//     const data = [];
//     const dataRef = collection(db, 'feeds');
//     const dataSnapshot = onSnapshot(dataRef, (snapshot) => {
//       snapshot.forEach((doc) => {
//         data.push(doc.data());
//       });
//       cb(data);
//     });
//     return dataSnapshot;
//   }

async function getAllFeeds(cb) {
  const retrievedData = [];
  const feedsRef = collection(db, 'feeds');
  const feedsQuery = query(feedsRef, limit(1))
  const querySnapshot = await getDocs(feedsQuery);
  let i = 1;
  querySnapshot.forEach((doc) => {
    let docId = doc.id;
    // console.log(docId)
    let newObj = { feedId: docId, ...doc.data()}
    retrievedData.push(newObj);
  });
  // console.log(retrievedData)
  cb(retrievedData);
}

async function getUserById(userId, cb) {
  const querySnapshot = await getDoc(doc(db, 'users', `${userId}`));

  if (querySnapshot.exists()) {
    const retrievedData = querySnapshot.data();
    // console.log(retrievedData);
    return cb(retrievedData);
  }

  return cb(null);
}

export { getAllFeeds, getUserById, handleClientUpload, handleFirebaseUpload, likeHander };
