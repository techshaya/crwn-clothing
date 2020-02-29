import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1t3JfG17PvwcNmsL6o0nIZiiuKxyRi10",
    authDomain: "crwn-db-6f850.firebaseapp.com",
    databaseURL: "https://crwn-db-6f850.firebaseio.com",
    projectId: "crwn-db-6f850",
    storageBucket: "crwn-db-6f850.appspot.com",
    messagingSenderId:"1099223194740",
    appId: "1:1099223194740:web:6ceea2ca3c1f99d3744521",
    measurementId: "G-8JS1N0H6PC"
  };
 
 export const createUserProfileDocument = async(userAuth,additionalData) =>
 {
    if(!userAuth)
    {
    	return
    }
    console.log('userAuth',userAuth)
    console.log('userAuthUID',userAuth.uid)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log('userRef',userRef)
    const snapshot = await userRef.get();
    console.log('snapshot',snapshot)
    if(!snapshot.exists)
    {
    	const {displayName,email} = userAuth;
    	const createdAt = new Date();
    	try {
    		 userRef.set({
    		 	   displayName,email,createdAt,...additionalData
    		 })
    	} 
    	catch(e) 
    	{
    		// statements
    		console.log('error creating the user',e.message);
    	}
    }
    
    return userRef;
 }
 export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) =>
 {
    const CollectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
        const newDocRef = CollectionRef.doc();
       batch.set(newDocRef,obj)
    })
    return await batch.commit();
 }
export const getCurrentUser =()=>
{
    return new Promise((resolve,reject)=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>
      {
         unsubscribe()
         resolve(userAuth)
      },reject)
    })
}
 export const convertCollectionsSnapshotToMap = (collections) =>
 {
     const transformedCollection = collections.docs.map(doc =>{
        // console.log('docdata',doc.data())
        const {title,items} = doc.data();
        // console.log('title',{title})
        // console.log('items',{items})
        return ({
                    routeName: encodeURI(title.toLowerCase()),
                    id:doc.id,
                    title,
                    items
        })
     })
    
    return transformedCollection.reduce((accumulator,collection)=>{
                accumulator[collection.title.toLowerCase()] = collection;
               
                return accumulator;
     },{})
 }
  firebase.initializeApp(config);
 export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

  
export default firebase;