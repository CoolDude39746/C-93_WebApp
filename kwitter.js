function login_adduser() {
    username=document.getElementById("input_username").value;
    localStorage.setItem("User Name",username);
    window.location="kwitter_room.html";
}

//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBNjRuxuFFldpQJRWWsy8nHB6TmxYGlIhE",
    authDomain: "c-94-bd08f.firebaseapp.com",
    databaseURL: "https://c-94-bd08f-default-rtdb.firebaseio.com",
    projectId: "c-94-bd08f",
    storageBucket: "c-94-bd08f.appspot.com",
    messagingSenderId: "915706782042",
    appId: "1:915706782042:web:3b107c43dbfb0e486e1363"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function AddUser() {
    var Username=document.getElementById("input_1").value;
    firebase.database().ref("/").child(Username).update({
    purpose : "to add more users" });
}