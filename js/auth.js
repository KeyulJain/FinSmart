var firebaseConfig = {
    apiKey: "AIzaSyBsPP7x8HlPmh1Sy0OHy-7oT66NfCBBK3A",
    authDomain: "finsmart-1c2dd.firebaseapp.com",
    databaseURL: "https://finsmart-1c2dd.firebaseio.com",
    projectId: "finsmart-1c2dd",
    storageBucket: "finsmart-1c2dd.appspot.com",
    messagingSenderId: "1082242562753",
    appId: "1:1082242562753:web:2ce2defb1bee479f87b240",
    measurementId: "G-XNFFMLBNX6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const signUpButton = document.querySelector("#submitSignUp");
const signInButton = document.querySelector("#submitSignIn");

signUpButton.addEventListener('click', (e) => {
    console.log('hello');
    e.preventDefault();
    const email = document.querySelector("#emailSignUp").value;
    const password = document.querySelector("#passwordSignUp").value;
    console.log(email, password);
    //auth.createUserWithEmailAndPassword
    auth.createUserWithEmailAndPassword(email, password).then(() => console.log("done,bitch!")).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
    });
})

signInButton.addEventListener('click', (e) => {
    console.log('hello');
    e.preventDefault();
    const email = document.querySelector("#emailSignIn").value;
    const password = document.querySelector("#passwordSignIn").value;
    console.log(email, password, 'yo');
    //auth.createUserWithEmailAndPassword

    auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log("done!")
        alert('Welcome!')
    }).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
    });
})