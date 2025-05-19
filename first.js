
//.previousElementSibling
const element = document.getElementById("apple");
const previousSibling = element.previousElementSibling;
previousSibling.style.color = "red";    


const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ul) =>{
    const previousSibling = ul.previousElementSibling;
    previousSibling.style.backgroundColor = "red";  
});