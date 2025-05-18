function outer() {
    let message = "hello";

    function inner() {  
        console.log(message);
    }   
   inner();
}
outer();

function increment() {
    let count = 0;
    count++;
    console.log(count);
}
increment();



function createCounter(){
  function increment() {
       let count = 0;
    count++;
    console.log(count);
}
return {increment};
}
const counter = createCounter();
counter.increment(); // 1