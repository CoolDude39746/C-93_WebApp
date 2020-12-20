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
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
         span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";
         row=name_tag+message_tag+like_button+span_tag;
         document.getElementById("output").innerHTML+=row;
         //Commenting Is Satisfiying And Fun
         //End code    
       } });  }); }
getData();

function update_like(message_id) {
      console.log("Clicked On The Like Button..."+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(Room_Name).child(message_id).update({
            like:update_likes
      });
}

function logout() {
      localStorage.removeItem("User_Name");
      localStorage.removeItem("Room_Name");
      window.location="index.html";
}

