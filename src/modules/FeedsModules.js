import { db } from '@/modules/firebase_config';
import { collection, getDoc, getDocs, doc } from 'firebase/firestore';

const handleClientUpload = (e, setSelectedFileCb, setSelectedFilePathCb) => {
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

export { getAllFeeds, getFeedById, handleClientUpload };
