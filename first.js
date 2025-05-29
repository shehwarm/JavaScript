const person1 ={
 
    firstName: "Spongebob",
    lastName : "docker",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("hiii")},
    eat: function(){console.log("Im eating patty")},
}

const person2 = {
    
    firstName: "patrick",
    lastName : "docker",
    age: 20,
    isEmployed: false,
    sayGoodbye: function(){console.log("byeee")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayGoodbye();