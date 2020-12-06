
//ADD YOUR FIREBASE LINKS HERE 
var firebaseConfig = {
      apiKey: "AIzaSyDDfBeC8vkRfS_ko4MeLkSujptP8j0DuVY",
      authDomain: "kwitter-firebase.firebaseapp.com",
      projectId: "kwitter-firebase",
      storageBucket: "kwitter-firebase.appspot.com",
      messagingSenderId: "735127417925",
      appId: "1:735127417925:web:1dca05cedf531824c3df2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      window.location="index.html";
}
