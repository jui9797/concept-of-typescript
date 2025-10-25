//oop -class

class Animal {
  /**
     *  public name : string,
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

/**
 * $ ts-node-dev --respawn --transpile-only ./module3/3.1.ts
[INFO] 20:12:44 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
Buddy says Woof
Whiskers says Meow
 */
