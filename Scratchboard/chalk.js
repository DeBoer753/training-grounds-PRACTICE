// SCRATCHBOARD - write, erase, or don't erase and come back to it later. 

const array = [1,2,3,4,5]
const object = {
  myName: 'Myles',
  age: 29,
  eyes: "blue",
  hobbies: {
    hobby1: "ski",
    hobby2: "bike",
    hobby3: "cook"
  }
}

const [one, two] = array
const {myName, age } = object
const {eyes, hobbies: {hobby1, hobby2}} = object

console.log(one, two);
console.log(myName, age);
console.log(eyes, hobby1, hobby2);
