

// step 1 : create the element

const newH1 = document.createElement("h1");

//step 2 : add the properties

newH1.textContent = "Hello World";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.fontSize = "50px";
newH1.style.textAlign = "center";

//step 3 : add the element to the DOM
document.body.append(newH1);

//step 4 : Remove HTML element

