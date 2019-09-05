import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCKYkktNR--XoPNicSF6YV5EGuTetwKGtI",
    authDomain: "react-tutorial-c0ff0.firebaseapp.com",
    databaseURL: "https://react-tutorial-c0ff0.firebaseio.com",
    projectId: "react-tutorial-c0ff0",
    storageBucket: "react-tutorial-c0ff0.appspot.com",
    messagingSenderId: "289402525608"
};

firebase.initializeApp(config)

export const Firebase = firebase;