const firebase = require("firebase/app");
require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;
const fb = firebase.initializeApp({
  apiKey: apiKey,
});

exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);
