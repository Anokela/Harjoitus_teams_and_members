import firebase from 'firebase/compat';
import 'firebase/auth';

export const firebaseConfig = ({
    apiKey: "AIzaSyB4Rjn3PrdVjxRGBCvvtx6kOoY8ZwbOjo0",
    authDomain: "teams-and-members-demo.firebaseapp.com",
    databaseURL: "https://teams-and-members-demo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teams-and-members-demo",
    storageBucket: "teams-and-members-demo.appspot.com",
    messagingSenderId: "423889339159",
    appId: "1:423889339159:web:db53135b9fdd67974dad52",
    databaseURL: "https://teams-and-members-demo-default-rtdb.europe-west1.firebasedatabase.app/"
});

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export { firebase };
export const TEAMS_REF = '/teams/';
export const MEMBERS_REF = '/members/';
export const MEMBERSHIPS_REF = '/memberships/';

