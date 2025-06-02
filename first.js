 const jsonNames= `["squareBob" , "patrick", "squidward", "sandy"]`;
 const jsonPerson = `{"name": "spongebob", "age": 20, "isEmployed": true, "hobbies": ["jellyfishing","bubble blowing","karate"]}`;
 const jsonPeople = `[{"name": "spongebob", "age": 20,"isEmployed": true},
                      {"name": "patrick", "age": 21, "isEmployed": false},
                      {"name": "squidward", "age": 30,"isEmployed": true},
                      {"name": "sandy","age": 25,"isEmployed": true}]`;
const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);