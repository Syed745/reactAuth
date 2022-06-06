import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import app from './firbaseConfig'
import { getDatabase, ref, set, onValue } from "firebase/database";



const auth = getAuth(app);
const database = getDatabase(app);

let signupfb = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password)



  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
}
let loginfb = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password)
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
}
let signutfb = () => {
   return signOut(auth)
}
// let checkAuth = (user) => {
//   return onAuthStateChanged(auth, user.id)
//  => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
//}

let sendData = (obj, nodeName, id) => {


  let reference = ref(database, `${nodeName} / + ${id ? id : ""}`)

  return set(reference, obj)
}
let getData = (nodeName) => {
  const dbRef = ref(database, nodeName);
  return onValue(
    dbRef,
     (snapshot) =>  {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childData)
    });
  }, {
    onlyOnce: true
  });
}

export { signupfb, loginfb, sendData, getData,signutfb }