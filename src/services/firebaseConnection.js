import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBTUx2RwTIKpZwjlHTurBowsY4ruJJyg_A",
  authDomain: "projeto-financas-73b55.firebaseapp.com",
  projectId: "projeto-financas-73b55",
  storageBucket: "projeto-financas-73b55.appspot.com",
  messagingSenderId: "874830902782",
  appId: "1:874830902782:web:ed182772d3196db23dbcaf",
  measurementId: "G-HKHVNV0WQH"
};

 firebase.initializeApp(firebaseConfig);

 export default firebase;