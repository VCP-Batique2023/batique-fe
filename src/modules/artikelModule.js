import { db, storage } from '@/modules/firebase_config';
// import { v4 } from 'uuid';
import {
  collection,
  getDoc,
  getDocs,
  setDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function getAllArtikel(cb) {
    const retrievedData = [];
    const querySnapshot = await getDocs(collection(db, 'artikel'));
    querySnapshot.forEach((doc) => {
      retrievedData.push(doc.data());
    });
    cb(retrievedData);
}

async function getArtikelById(docId, cb) {
    try {
      const docRef = doc(db, 'artikel', docId);
      const docSnapshot = await getDoc(docRef);
  
      if (docSnapshot.exists()) {
        const retrievedData = docSnapshot.data();
        cb(retrievedData);
      } else {
        console.error('Document not found with ID:', docId);
        cb(null);
      }
    } catch (error) {
      console.error('Error fetching article by ID:', error);
      cb(null);
    }
  }
  
  
  
  

export { getAllArtikel,getArtikelById };