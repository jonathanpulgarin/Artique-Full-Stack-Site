// IMPORT SECTION
// - * - * - * - * - * - * - * - * - * - * - * - * - *
//Import Express to use it with Node
const express = require('express');
const router = express.Router();

//Imports Fire base Authorization and Database
const firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");

//Imports Body Parser in order to read items subbmitted in a html form
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//Imports Cors to allow handling post requests
const cors = require('cors');
router.use(cors());
// - * - * - * - * - * - * - * - * - * - * - * - * - *

var email;
var password;

//Initializes Firebase | ENTER YOUR API KEY CREDENTIALS
var firebaseConfig = {
  apiKey: "AIzaSyCOGkydSBH8PisOah6Iuw1ou7utnShdrOs",
  authDomain: "artique-87845.firebaseapp.com",
  databaseURL: "https://artique-87845.firebaseio.com",
  projectId: "artique-87845",
  storageBucket: "artique-87845.appspot.com",
  messagingSenderId: "658107825164",
};
firebase.initializeApp(firebaseConfig);

//HANDLES GET REQUEST AT https://localhost:3001/
router.get('/', function(req, res, next) {
  console.log("GET REQUEST RECIEVED")
  res.json([
    {id: 1, username: "Jon"},
  ]);
});

//HANDLES POST REQUEST AT https://localhost:3001/
router.post('/', (req, res) => {

});

//HANDLES POST REQUEST AT https://localhost:3001/login
router.post('/login', (req, res) => {
  email = req.body.email;
  password = req.body.password;

  //Signs user in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    console.log(errorCode + ": " + errorMessage);
    console.log("Login Failed");
  });
  
  //If user signs in then do ...
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("User logged in");
      if (user != null) {

      }
    }
    else {
      console.log("User not logged in");
    }
  });

  res.json([
    {id: 1, username: "Jon"},
  ]);
});

module.exports = router;
