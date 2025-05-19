//.firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

const ulElemnts = document.querySelectorAll("ul");
ulElemnts.forEach((ul) => {
  const firstChild = ul.firstElementChild;
  firstChild.style.backgroundColor = "red";
});