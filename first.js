
//.lastElementChild

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ul) => {
    const lastChild = ul.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});