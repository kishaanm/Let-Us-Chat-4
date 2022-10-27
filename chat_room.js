var firebaseConfig = {
    apiKey: "AIzaSyATRtvzULjQa7WzeJpsNP6pSFx72gYdsFc",
    authDomain: "let-s-chat-8441d.firebaseapp.com",
    databaseURL: "https://let-s-chat-8441d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-8441d",
    storageBucket: "let-s-chat-8441d.appspot.com",
    messagingSenderId: "670183050632",
    appId: "1:670183050632:web:b6b441d77c44334433be3d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addUser(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).value;
      purpose : "adding user";

      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name -" + Room_names);
      
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div></hr>";

      document.getElementById("output").innerHTML += row;

     });});
}

getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}