import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyDqEoRe6q_qkozayB7tQvVyXY9KljMVssg",
        authDomain: "crown-db-2189a.firebaseapp.com",
        databaseURL: "https://crown-db-2189a.firebaseio.com",
        projectId: "crown-db-2189a",
        storageBucket: "crown-db-2189a.appspot.com",
        messagingSenderId: "668508143953",
        appId: "1:668508143953:web:9c503e2e8894e2deff9370",
        measurementId: "G-32R8ZVC9KG"
};

firebase.initializeApp(config);

// this is for google authentication utilitie 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//give us access to google auth provider class from auth library
const provider = new firebase.auth.GoogleAuthProvider();

//this means is that we want to always trigger the google popup 
//whenever we use this google auth for auth and sign in
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () =>auth.signInWithPopup(provider);
export default firebase;
