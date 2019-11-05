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

//API request
//the function that takes that user off object got back from our authentication library 
//and then store inside of our database.

export const createUserProfileDocument = async(userAuth, additionalData) =>{
        //if userAuth not exist
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        //console.log(userRef);
        const snapShot = await userRef.get();
        //console.log(snapShot);

     //if not a snapShot then create one 
     //that minds create a new user with data from userAuth obj
      if(!snapShot.exist){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{    
                // create userRef
                await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                })
        }catch (error){
                console.log('error creating user,',  error.message);
        }
      }

      return userRef;

};

//Initialize the Firebase app using the configuration object:
firebase.initializeApp(config);

// this is for google authentication utilitie 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setup the providers we want to support and access the auth library:
//give us access to google auth provider class from auth library
const provider = new firebase.auth.GoogleAuthProvider();

//this means is that we want to always trigger the google popup 
//whenever we use this google auth for auth and sign in
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
