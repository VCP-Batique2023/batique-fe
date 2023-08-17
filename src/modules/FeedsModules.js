import { v4 } from 'uuid';
import { db, storage } from '@/modules/firebase_config';
import { collection, getDoc, getDocs, setDoc, doc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function handleFirebaseUpload(caption, selectedFile, setShowModalAddPostCb){
  const imageRef = ref(storage, `feeds/${v4()}`);
  const storageSnapShot = await uploadBytes(imageRef, selectedFile);
  const publicUrl = await getDownloadURL(storageSnapShot.ref);

  await setDoc(doc(db, 'feeds', `username-${v4()}`), {
    caption: caption,
    createdAt: Timestamp.fromDate(new Date()) ,
    imageUrl: publicUrl,
    like: 0,
    userId: 'TPs0P8qiG5M3nEakYxQLt1ZENNY2',
  });
  setShowModalAddPostCb(-1);
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
};

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
  const querySnapshot = await getDocs(collection(db, 'feeds'));
  querySnapshot.forEach((doc) => {
    retrievedData.push(doc.data());
  });
  cb(retrievedData);
}

async function getFeedById(userId, cb) {
  const querySnapshot = await getDoc(doc(db, 'users', `${userId}`));

  if (querySnapshot.exists()) {
    const retrievedData = querySnapshot.data();
    // console.log(retrievedData);
    return cb(retrievedData);
  }

  return cb(null);
}

export { getAllFeeds, getFeedById, handleClientUpload, handleFirebaseUpload };
