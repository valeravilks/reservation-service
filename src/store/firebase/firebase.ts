import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpA_QpjbHldTPVXiq5FYQDYv3SgEJnlMo",
    authDomain: "test-c0f21.firebaseapp.com",
    databaseURL: "https://test-c0f21.firebaseio.com",
    projectId: "test-c0f21",
    storageBucket: "test-c0f21.appspot.com",
    messagingSenderId: "121729856495",
    appId: "1:121729856495:web:07d12b62ef501879dbbc1a"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
}

export default Firebase;