// SCRATCHBOARD - write, erase, or don't erase and come back to it later. 
let userInput = document.getElementById('input')
let addItemBtn = document.getElementById('add-btn')
let removeItemBtn = document.getElementById('remove-btn')

let newLi = "Hi, Im Li"

addItemBtn.addEventListener('click', (event) => {
  if (event.target === addItemBtn) {
    // if the target of my mouse click lands on the add button on the browser then something should do something..
    // that something would be to add the input value into the list item
  }
  console.log("userInput: ", userInput.value);
  console.log("I am event listener not in a function so I will log: ", newLi);
})

removeItemBtn.addEventListener('click', (event) => {
  if (event.target === removeItemBtn) {
    // if the target of my mouse click lands on the remove button on the browser then something should do something..
    // that something would be to remove the input value into the list item
  
  }
})