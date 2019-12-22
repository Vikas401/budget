import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeDK-ghhAQ9r-i_13vlJawefNjHJp69ys",
    authDomain: "budget-2d3a0.firebaseapp.com",
    databaseURL: "https://budget-2d3a0.firebaseio.com",
    projectId: "budget-2d3a0",
    storageBucket: "budget-2d3a0.appspot.com",
    messagingSenderId: "799781339118",
    appId: "1:799781339118:web:d4704bc4091828d54dd8ff",
    measurementId: "G-BW5QPVG4RF"
  };
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email }= userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }catch(error){
       console.log(error);
      }
    }
     return userRef;
   
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;