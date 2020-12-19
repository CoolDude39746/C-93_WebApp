function login_adduser() {
    username=document.getElementById("input_username").value;
    localStorage.setItem("User_Name",username);
    window.location="kwitter_room.html";
}