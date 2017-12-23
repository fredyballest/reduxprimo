import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyA9uhuSOPR860-H2mx9JZCyCAsds6CQwyY",
    authDomain: "manager-7fd25.firebaseapp.com",
    databaseURL: "https://manager-7fd25.firebaseio.com",
    projectId: "manager-7fd25",
    storageBucket: "manager-7fd25.appspot.com",
    messagingSenderId: "440573893174"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  
  export default database;