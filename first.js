// 1.document.getElementById("") 
const myHeading= document.getElementById("my-heading");
myHeading.style.backgroundColor = "lightpurple";
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
    fruit.style.backgroundColor = "lightred";
});

// 3.document.getElementsByTagName("")
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor = "red";
 
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "pink";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "pink";
}
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightblue";
})

// 4.document.querySelector("")

const element = document.querySelector(".fruits");
element.style.backgroundColor = "lightgreen";

// 5.document.querySelectorAll("")

const foods = document.querySelectorAll("li");
foods[0].style.backgroundColor = "lightblue";
foods[1].style.backgroundColor = "lightgreen";
foods[2].style.backgroundColor = "lightyellow";

foods.forEach(food => {
    food.style.backgroundColor = "lightpink";
});