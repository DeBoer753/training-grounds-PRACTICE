// FILTER: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// Notes:  
// -- Filter only lets you get elements of an array (not characters, unless you split the array first)


// Filter If Greater Than: 
let numbers = [17,13,25,46]
let filteredNumbers = numbers.filter(x => x > 22)
console.log(filteredNumbers);

// Filter If Cities Listed: 
let cities = ['london', 'tokyo', 'france', 'athens']
let filteredCities = cities.filter(x => x == "tokyo" || x == "athens")
console.log(filteredCities);

// Filter Element Based Off First Index: 
let names = ['billy', 'joel', 'duncan']
let letterJ = names.filter(x => x[0] == "j")
console.log(letterJ);

// Array of Objects Filter:
const objectData = [
    {
        name: 'bob',
        age: 53
    },
    {
        name: 'jeff',
        age: 33
    },
    {
        name: 'alex',
        age: 21
    }
]

let olderThan25 = objectData.filter(x => x.age > 25)
console.log(olderThan25);

