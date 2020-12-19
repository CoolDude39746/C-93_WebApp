
//ADD YOUR FIREBASE LINKS HERE 
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

    function AddRoom() {
      Room_Name=document.getElementById("input_roomname").value;
      firebase.database().ref("/").child(Room_Name).update({
            purpose:"Adding The Room Name..."
      });
      localStorage.setItem("Room_Name",Room_Name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName-"+Room_names);
      row="<div class='Room_Name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("User_Name");
      localStorage.removeItem("Room_Name");
      window.location="index.html";
}