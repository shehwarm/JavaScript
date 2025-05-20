

const myBox = document.getElementById("myBox");

function changeColor(event){
        event.target.style.backgroundColor = "red";
        
    }

myBox.addEventListener("click", changeColor);
 