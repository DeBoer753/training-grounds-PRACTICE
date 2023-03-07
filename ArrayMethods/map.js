// MAP: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Notes:

// Multiplying Numbers:
const myNum1 = [1,2,3,4,5]
const newNum1 = myNum1.map(mult => mult * 6)
console.log(newNum1); // [ 6, 12, 18, 24, 30 ]

// Multiplying Strings That Are Numbers:
const myNum2 = [3,7,5,9]
const newNum2= myNum1.map(x => x * '6') 
console.log(newNum2); // [ 6, 12, 18, 24, 30 ] .map() multiplication operator works with string and only if string is number 

// Multiplying Strings That Aren't Numbers:
const myNum3 = [5,2,9,1];
const newNum3 = myNum3.map(x => x * 'cats') 
console.log(newNum3);

// Adding Strings to Numbers:   
const myNum4 = [3,2,4];
const newNum4 = myNum4.map(x => x + "numbers to string!") 
console.log(newNum4);

// Adding More Strings to Numbers: 
const myNum5 = [10,20,30,40];
const newNum5 = myNum5.map(x => x + "yo" + "go" + "fro")
console.log(newNum5); 

// Using Map As Push to insert concated variables: 
const emptyBoat = ["Boat: "]
const bob = "bob"
const calvin = "calvin"
const jerry = "jerry"
const allTogetherNow = emptyBoat.map(x => x + bob + ", " + calvin + ", " + jerry)
console.log(allTogetherNow);

// Using Map To Determine If There Are Numbers Less Than 24:
let numbersArray = [17,13,25,46]
let mappedNumbers = numbersArray.map (x => x < 24)
console.log(mappedNumbers);

// Using Map With a Built Function: (*)
function helloMyNameIs() {
    let nameTag = "Name: ";
    return nameTag
}

const greet = x =>  helloMyNameIs() + x;
const names = ["Jack", "Jill"];
// const nameMe = names.map(x => helloMyNameIs() + x) 
const nameMe = names.map(greet) 
console.log(nameMe); 

// Using Map With a Pre-Built Function Using a Loop and If Statement: 
function genderValidator(x) {
    for (let i=0; i==i; i++) {
        if (x == "m") {
            return true;
        } else if (x == "f") {
            return true;
        } else {
            return false;
        }
    }
}
const genders = ["m","f","f","z","tree m sap"]
const validated = genders.map(genderValidator) // QUESTION: why doesn't ny higher order function need close parameters where line 44 does?
console.log(validated);

// Using Map as an If Statement: 
const genders2 = ["m","f","f","z","tree m sap"]
const validated2 = genders.map(x => x == "m" || x == "f") // QUESTION: is this called an if statement even though there are no ifs? what should I change the title too?
console.log(validated2);   

// Using Map With Other Methods: 
const halloween = ["halloween"]
const pumpkins = "pumpkins"
const thatsSpooky = halloween.map(x => x).push(pumpkins) // QUESTION: why does it say in the documentation that x would be inside of parenthesis where it works fine without?
console.log(thatsSpooky); // QUESTION: why does this print 2? cant you use methods after methods after methods? ex. var.push().unshift().pop() 

// Using Map With Math Square Root:
const numbers = [1, 4, 9];
const roots = numbers.map(x => Math.sqrt(x)); 
console.log(roots);

// Using Map With Math Random and Math Floor:
const randomizeZeros = [0,0,0,0]
const randomized = randomizeZeros.map(x => Math.floor(Math.random() * (x + 10)) + 1)
console.log(randomized);

// Using Map With Data Objects and Then Reusing New Data Variable:
const namesData = [{
    name: "Seth",
    hobbies: "pottery",
    movies: ["Superbad", "40 Year Old Virgin", "This Is The End"]
}]
const collectedData = namesData.map(x => x)
console.log(collectedData); // QUESTION: How can I collect this data without fat arrow function? getting confused with the alternative regarding object mapping
collectedData[0].fans = "me"
collectedData[0].movies[3] = "hey"// QUESTION: There was no index 3..I made one. why didnt the log come out as -1, undefined, etc?
collectedData[0].movies.push(["TEST"])
console.log(collectedData);
console.log(collectedData[0].movies[4]);