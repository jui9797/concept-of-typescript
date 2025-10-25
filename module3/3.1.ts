//oop -class

class Animal {
  /**
     * public name : string,
        public species : string,
        public sound : string
     */
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    /**
     * this.name= name;
        this.species= species;
        this.sound= sound;
     */
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
dog.makeSound(); // Output: Buddy says Woof

const cat = new Animal("Whiskers", "Cat", "Meow");
cat.makeSound(); // Output: Whiskers says Meow
