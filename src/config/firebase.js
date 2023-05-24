import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDR5ZRmPFUQwBZjak9AdZuyNsH2neVMX90',
  authDomain: 'info-gustavo-81b0f.firebaseapp.com',
  projectId: 'info-gustavo-81b0f',
  storageBucket: 'info-gustavo-81b0f.appspot.com',
  messagingSenderId: '1954937569',
  appId: '1:1954937569:web:a487b0648119af40c995a0'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };