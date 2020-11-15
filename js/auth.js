// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    // ...
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
// console.log("Tanay" + db);

// auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });

const button = document.querySelector(".submit");
button.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector("#e-mail").value;
    const password = document.querySelector("#pass-word").value;
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password).then(() => console.log("done,bitch!")).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})