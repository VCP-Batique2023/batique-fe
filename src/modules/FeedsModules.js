import { v4 } from 'uuid';
import { db, storage } from '@/modules/firebase_config';
import toast from 'react-hot-toast';
import {
  collection,
  getDoc,
  setDoc,
  doc,
  Timestamp,
  query,
  onSnapshot,
  updateDoc,
  orderBy,
  limit,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const toastLoading = toast.loading('Mohon tunggu...');
  if (caption == '') {
    toast.error('Silahkan masukan caption', { id: toastLoading });
    return true;
  }
  const result = await checkImageOnMLAPI(selectedFile);
  if (!result.isBatik) {
    // Return something to trigger the toast
    toast.error('Silahkan upload gambar batik!', { id: toastLoading });
    setShowModalAddPostCb(-1);
    setSelectedFileCb('');
    setSelectedFilePathCb('');
    setCaptionCb('');
    return result.isBatik;
  }
  const imageRef = ref(storage, `feeds/${v4()}`);
  const storageSnapShot = await uploadBytes(imageRef, selectedFile);
  const publicUrl = await getDownloadURL(storageSnapShot.ref);

  await setDoc(doc(db, 'feeds', `${uid}-${v4()}`), {
    caption: caption,
    createdAt: Timestamp.fromDate(new Date()),
    imageUrl: publicUrl,
    like: 0,
    likedByAccount: [],
    userId: uid,
  });
  toast.success('Gambar berhasil di upload', { id: toastLoading });
  setShowModalAddPostCb(-1);
  setSelectedFileCb('');
  setSelectedFilePathCb('');
  setCaptionCb('');
}

async function handleClientUpload(e, setSelectedFileCb, setSelectedFilePathCb) {
  const file = e.target.files[0];
  if (Math.round(file.size / 1048576) > 10) {
    toast.error('Silahkan masukan gambar dibawah 10MB');
    // console.log('Silahkan masukan gambar dibawah 10MB');
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
  const dataRef = collection(db, 'feeds');
  // Tambahin limit kalau debugging
  const feedsQuery = query(dataRef, orderBy('createdAt', 'desc'));
  const dataSnapshot = onSnapshot(feedsQuery, (snapshot) => {
    const retrievedData = [];
    snapshot.forEach((doc) => {
      let docId = doc.id;
      let newObj = { feedId: docId, ...doc.data() };
      retrievedData.push(newObj);
    });
    // console.log(retrievedData)
    cb(retrievedData);
  });
  return dataSnapshot;
}

// async function getAllFeeds(cb) {
//   const retrievedData = [];
//   const feedsRef = collection(db, 'feeds');
//   const feedsQuery = query(feedsRef, limit(5));
//   const querySnapshot = await getDocs(feedsQuery);
//   querySnapshot.forEach((doc) => {
//     let docId = doc.id;
//     // console.log(docId)
//     let newObj = { feedId: docId, ...doc.data() };
//     retrievedData.push(newObj);
//   });
//   // console.log(retrievedData)
//   cb(retrievedData);
// }

async function getUserById(userId, cb) {
  const querySnapshot = await getDoc(doc(db, 'users', `${userId}`));

  if (querySnapshot.exists()) {
    const retrievedData = querySnapshot.data();
    // console.log(retrievedData);
    return cb(retrievedData);
  }

  return cb(null);
}

async function likeHander(uid, feedId, like, setLikeCb) {
  let likedByAccount = [];
  const feedRef = doc(db, 'feeds', `${feedId}`);
  const querySnapshot = await getDoc(feedRef);
  console.log(querySnapshot);
  if (querySnapshot.exists()) {
    const retrievedData = querySnapshot.data();

    if (!retrievedData.likedByAccount) {
      likedByAccount = [];
    } else {
      likedByAccount = [...retrievedData.likedByAccount];
    }
    const index = likedByAccount.findIndex((likedBy) => {
      return likedBy.trim() == uid;
    });

    let updatedLike = [];
    if (index > -1) {
      updatedLike = likedByAccount.filter((liked) => {
        return liked.trim() != uid;
      });
      toast.success('Unliked');
    } else {
      updatedLike = [...likedByAccount, uid];
      toast.success('Liked');
    }

    await updateDoc(feedRef, {
      like: updatedLike.length,
      likedByAccount: updatedLike,
    });

    return setLikeCb(!like);
  }

  return setLikeCb(like);
}

async function checkIsLiked(uid, listLikedByAcc, setIsLikedCb) {
  if (!listLikedByAcc) {
    setIsLikedCb(false);
    return;
  }

  const index = listLikedByAcc.findIndex((likedBy) => {
    return likedBy.trim() == uid;
  });

  return setIsLikedCb(index > -1 ? true : false);
}

export {
  getAllFeeds,
  getUserById,
  handleClientUpload,
  handleFirebaseUpload,
  likeHander,
  checkIsLiked,
};
