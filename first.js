const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.classList.add("hover");

myButton.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");
});
myButton.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");
});

myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled")}); 

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent = "Enabled";
    }
    else{
        event.target.textContent = "Disabled";
    }
    event.target.classList.replace("enabled", "disabled")});