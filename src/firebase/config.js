import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAUo7hHsMS-3DCEyh1Okk9b9Y4AiPnOBw8",
    authDomain: "vue-blog-system-2ca2e.firebaseapp.com",
    projectId: "vue-blog-system-2ca2e",
    storageBucket: "vue-blog-system-2ca2e.appspot.com",
    messagingSenderId: "691843420825",
    appId: "1:691843420825:web:59e8ccb790193b13335e08"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};