//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDDfBeC8vkRfS_ko4MeLkSujptP8j0DuVY",
    authDomain: "kwitter-firebase.firebaseapp.com",
    databaseURL: "https://kwitter-firebase-default-rtdb.firebaseio.com",
    projectId: "kwitter-firebase",
    storageBucket: "kwitter-firebase.appspot.com",
    messagingSenderId: "735127417925",
    appId: "1:735127417925:web:1dca05cedf531824c3df2c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  User_Name=localStorage.getItem("User_Name");
  Room_Name=localStorage.getItem("Room_Name");

  function Send() {
        msg=document.getElementById("msg").value;
        firebase.database().ref(Room_Name).push({
        name:User_Name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+Room_Name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
     if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("User_Name");
    localStorage.removeItem("Room_Name");
    window.location="index.html";
}
