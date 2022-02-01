const firebaseConfig = {
      apiKey: "AIzaSyDN_fOyXUbL6HI8q1ScwCOj7HrE5WdNZK4",
      authDomain: "kwitter-90f48.firebaseapp.com",
      databaseURL: "https://kwitter-90f48-default-rtdb.firebaseio.com",
      projectId: "kwitter-90f48",
      storageBucket: "kwitter-90f48.appspot.com",
      messagingSenderId: "124874196571",
      appId: "1:124874196571:web:9d2838a0d0673b81b4617e"
    };
    
   
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

    function addroom() 
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
  

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log ("Room_Name" + Room_names );
      row = "<div class ='room_name' id="+ Room_names +" onclick ='redirectToRoomName(this.id)'>"+ Room_names +"</div> <hr> ";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


    