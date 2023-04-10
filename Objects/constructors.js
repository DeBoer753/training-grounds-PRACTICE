const Animal = function (raining, noise) { // best practice to have capital letter for constructors in order to allow other devs to identify that they should use the "new" key word when constructing new variables  
  this.raining = raining
  this.noise = noise
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log('my sound is:', this.noise);
    }
  }
}
const cat = new Animal(true, 'meow')
console.log(cat.makeNoise());

const GameCharacter = function(username, age, location) {
  this.username = username 
  this.age = age 
  this.location = location 
  let options = ['eagle','bear','stingray','lion']
  let randomIndex = Math.floor(Math.random() * options.length)
  this.sidekick = options[randomIndex]
  console.log(`${this.username} has been given a ${this.sidekick} as their sidekick`);

}
const deboer753 = new GameCharacter('deboer753', 29, 'Napa')