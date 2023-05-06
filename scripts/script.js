let previous_message = "";
let publicmessage = "";
let messagecounter = 0;

function send() {
  const username = document.getElementById("username").value;
  if (username != "")
  {
    const rawmessage = document.getElementById("textbox").value;
    let usermessage = username + ": " + rawmessage;
    localStorage.setItem("publicmessage", usermessage);
    document.getElementById("textbox").value = "";
  }
}

setInterval(() => {
  publicmessage = localStorage.getItem("publicmessage");
  if (publicmessage !== previous_message && publicmessage !== null) {
    const newmessage = document.createElement("div");
    newmessage.className = "message";
    newmessage.id = "M" + messagecounter;
    document.getElementById("messagebox").appendChild(newmessage);

    const newtext = document.createElement("p");
    newtext.innerHTML = publicmessage;
    const target = "M" + messagecounter;
    document.getElementById(target).appendChild(newtext);

    previous_message = publicmessage;
    messagecounter++;
  }
}, 1000); // check for new messages every second