import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyA4p1DSrg7JqXa2UF60el4EkT9S3P5xIrA",
  authDomain: "seam-website-52215.firebaseapp.com",
  databaseURL: "https://seam-website-52215.firebaseio.com",
  projectId: "seam-website-52215",
  storageBucket: "seam-website-52215.appspot.com",
  messagingSenderId: "677603434170",
  appId: "1:677603434170:web:75661b9943d99168332c83",
  measurementId: "G-BZ18MJ6NPR"
};
firebase.initializeApp(config);

export default firebase;