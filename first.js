const min = 50; 
const max = 100;
const range = max - min ;

let randomNum = Math.floor(Math.random() * range) + min;

console.log(randomNum);