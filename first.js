function Car(make, model){
    this.make = make;
    this.model = model;
}

const car1 = new Car("Ford", "Mustang");
const car2 = new Car("Chevrolet", "Camaro");

console.log(car1.make);
console.log(car1.model);

console.log(car2.make);
console.log(car2.model);