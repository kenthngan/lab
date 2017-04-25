
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAp_hh1NGXdz-djOdpBiIzmgqMqyeFg2PI",
    authDomain: "maps-1492669650096.firebaseapp.com",
    databaseURL: "https://maps-1492669650096.firebaseio.com",
    projectId: "maps-1492669650096",
    storageBucket: "maps-1492669650096.appspot.com",
    messagingSenderId: "856316497794"
  };
  firebase.initializeApp(config);

var firebase = require('firebase');

var ref = firebase.database().ref('maps-1492669650096');


var messageRef = ref.child('clicks');
var messageRef = messageRef.push();
var messageKey = messageRef.key;
var payload = {};
var clicks = {
  
  text:'hey'
};


