// 1.document.getElementById("") 
const myHeading= document.getElementById("my-heading");
myHeading.style.backgroundColor = "purple";
myHeading.style.textAlighn= "centre";
console.log(myHeading);

// 2.document.getElementsByClassName("")
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";
console.log(fruits);

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

// 3.document.getElementsByTagName("")
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);