import { db, storage } from '@/modules/firebase_config';
import toast from 'react-hot-toast';
import { v4 } from 'uuid';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function handleFirebaseUpdateProfile(
  uid,
  avatar,
  newAvatar,
  name,
  username,
  bio,
  setAvatarCb,
  setNameCb,
  setUsernameCb,
  setBioCb
) {
  const userRef = doc(db, 'users', uid);
  try {
    const imageRef = ref(storage, `profilePictures/profile-${uid}}`);
    const storageSnapShot = await uploadBytes(imageRef, newAvatar);
    const publicUrl = await getDownloadURL(storageSnapShot.ref);

    await updateDoc(userRef, {
      displayName: name,
      profilePicture: publicUrl,
      username: username,
      description: bio,
    });
    setAvatarCb(publicUrl);
    setNameCb(name);
    setUsernameCb(username);
    setBioCb(bio);
  } catch (err) {
    console.log(err);
  }
  return;
}

async function getCurrentUserDataByUid(
  uid,
  setAvatarCb,
  setNameCb,
  setUsernameCb,
  setBioCb
) {
  const querySnapshot = await getDoc(doc(db, 'users', `${uid}`));

  if (!querySnapshot.exists()) {
    return;
  }

  const retrievedData = querySnapshot.data();
  setAvatarCb(retrievedData.profilePicture);
  setNameCb(retrievedData.displayName);
  setUsernameCb(retrievedData.username);
  setBioCb(retrievedData.description);
  return;
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
  uid,
  caption,
  selectedFile,
  setSelectedFileCb,
  setSelectedFilePathCb,
  setCaptionCb,
  setShowModalAddPostCb
) {
  const result = await checkImageOnMLAPI(selectedFile);
  if (!result.isBatik) {
    // Return something to trigger the toast
    toast.error(`Silahkan upload gambar batik!`);
    setShowModalAddPostCb(-1);
    // console.log('isnotbatik');
    return;
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
  toast.success('Gambar berhasil di upload');
  setSelectedFileCb('');
  setSelectedFilePathCb('');
  setCaptionCb('Write your caption here!');
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
  const dataRef = collection(db, 'feeds');
  // Tambahin limit kalau debugging
  const feedsQuery = query(dataRef, where('userId', '==', userId));
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
  // const retrievedData = [];

  // const feedsCollection = collection(db, 'feeds');
  // const q = query(feedsCollection, where('userId', '==', userId));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   retrievedData.push(doc.data());
  // });
  // return cb(retrievedData);
}

export {
  getUserById,
  getFeedsById,
  handleClientUpload,
  handleFirebaseUpload,
  getCurrentUserDataByUid,
  handleFirebaseUpdateProfile,
};
