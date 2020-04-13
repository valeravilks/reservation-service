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
    private auth: firebase.auth.Auth;
    public user: any;
    private app: firebase.app.App;

    constructor() {
        this.app = firebase.initializeApp(firebaseConfig);
        this.auth = this.app.auth();
        this.user = null;
    }

    initial = async () => {
        return new Promise(((resolve, reject) => {
            this.auth.onAuthStateChanged((user) =>  {
                this.user = user;
                resolve(user);
            });
        }));
    };

    singIn = async (email: string, pass: string) => (
        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
    );

    singOut = async () => (
        firebase
            .auth()
            .signOut()
    );

    inAuth = (): boolean => {
        let user = this.auth.currentUser;
        console.log(`Есть ли логин пользователя? ${Boolean(user)}`);
        return Boolean(user)
    }
}


export default new Firebase();