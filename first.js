document.title = "website";
document.body.style.backgroundColor = "black";
console.dir(document); 

const username = " Shehwar ";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;