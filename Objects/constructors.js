class GameCharacter {
  constructor(username, age, location) {
    this.username = username 
    this.age = age 
    this.location = location 

    let options = ['eagle','bear','stingray','lion']
    let randomIndex = Math.floor(Math.random() * options.length)
    this.sidekick = options[randomIndex]
  }
}

const newGuy101 = new GameCharacter('newGuy101', 39, 'Sonoma') 
console.log(newGuy101.sidekick);

const deboer753 = new GameCharacter('deboer753', 29, 'Napa')


GameCharacter.prototype.introQuote = function() {
  console.log(`hello, my name is ${this.username}`.toLocaleUpperCase());
}
console.log(deboer753.introQuote());

class Animal {
  constructor(raining, noise) {
    this.raining = raining 
    this.noise = noise 
  }

  makeNoise() {
    console.log('this is my sound:', this.noise);
  }
}

const cat = new Animal(true, 'meow')
cat.makeNoise()
console.log(cat.raining);


class BlogPost {
  constructor(authorName, title, text, createdOn, comments = []) {
    this.authorName = authorName
    this.title = title
    this.text = text
    this.createdOn = createdOn.toLocaleDateString("en-US")
    this.comments = comments
  }

  printMetaData(){
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  addComment(comment){
    this.comments.push(comment)
  }
}

class Comment{
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName
    this.text = text
    this.createdOn = createdOn.toLocaleDateString("en-US")
    this.reaction = reaction
  }

  printMetaData(){
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
}

const comment1 = new Comment('Snoop', 'I love your soup. From another planet, your soup.', new Date(), '🔥')
const bp1 = new BlogPost('Martha Stewart', 'Soup For Snoop', 'Some dishes I like making for my good friend Snoop when he stops by', new Date())

console.log(bp1);
bp1.addComment(comment1)
console.log(bp1);