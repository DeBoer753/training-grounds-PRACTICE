// REDUCE: The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// Notes:

// Summing Numbers:
let numPkg1 = [0,1,2,3,4,5]
let rdcNumPkg1 = numPkg1.reduce((a, current) => a + current, 2) // a is your accumulator (your total waiting for current to be added to each next value) and 2 is what we decided for the accumulator to start at essentially
console.log('rdcNumPkg1: ', rdcNumPkg1);

// Summing Numbers Using an Index as an Accumulator:
let numPkg2 = [0,1,2,3,4,5]
let rdcNumPkg2 = numPkg2.reduce((a, current) => a + current, numPkg2[5]) 
console.log('rdcNumPkg2: ', rdcNumPkg2);

// Summing Numbers Using an Index as an Accumulator pt 2:
let numPkg3 = [0,1,2,3,4,5,[100,200,300]]
let rdcNumPkg3 = numPkg3.reduce((a, current) => a + current, numPkg3[2]) // adds everything in array and then gets concatted to first value second array
console.log('rdcNumPkg3: ', rdcNumPkg3);

// Summing Numbers Using an Index as an Accumulator pt 3:
let numPkg4 = [0,1,2,3,4,5,[100,200,300]]
let rdcNumPkg4 = numPkg4.reduce((a, current) => a + current, numPkg4[5] + 10) 
console.log('rdcNumPkg4: ', rdcNumPkg4);

// Summing Numbers Using an Index as an Accumulator and Slice Method BUT with Two Parameters in Slice Method:
let numPkg5 = [4,7,2,5,1,6]
for (let i = 0; i < numPkg5.length; i++ ) {
  if (numPkg5[i] === 1 + 1) {
    let newPkg1 = numPkg5.slice(numPkg5[i], 5) // MAKE SURE TO REMEMBER that the slice method SECOND parameter starts from the beginning just as any index would start, but then moves backwards by one. EXAMPLE: a person takes 5 steps forward, but then walks back one step. 
    let rdcNumPkg5 = newPkg1.reduce((a, current) => a + current, 0) 
    console.log('rdcNumPkg5: ', rdcNumPkg5);
  }
}

