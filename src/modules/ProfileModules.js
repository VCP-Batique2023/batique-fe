import { v4 } from 'uuid';
import { db, storage } from '@/modules/firebase_config';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function handleFirebaseUpload(
  uid,
  caption,
  selectedFile,
  setShowModalAddPostCb
) {
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

async function getFeedsById(userId, cb) {
  const retrievedData = [];

  const feedsCollection = collection(db, 'feeds');
  const q = query(feedsCollection, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    retrievedData.push(doc.data());
  });
  return cb(retrievedData);
}

export { getFeedsById, handleClientUpload, handleFirebaseUpload };
