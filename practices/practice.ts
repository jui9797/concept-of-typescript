{
  // Create a function that takes two numbers and returns their sum

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(5, 7)); // 12

  // Create a type for a user and print the name

  type User = {
    name: string;
    email: string;
    age: number;
  };

  const user: User = {
    name: "Jui",
    email: "jui@example.com",
    age: 20,
  };

  console.log(user.name);
  // Jui

  // Optional properties
  type Car = {
    brand: string;
    model: string;
    color?: string;
  };

  const car1: Car = { brand: "Toyota", model: "Corolla" };
  const car2: Car = { brand: "Tesla", model: "X", color: "Black" };

  //Create a function that accepts a union type

  function printId(id: string | number) {
    console.log("ID:", id);
  }

  printId(101);
  printId("A-22");

  // Narrowing using typeof

  function process(value: string | number) {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  // Generic function that returns the same value

  function identity<T>(value: T): T {
    return value;
  }

  const a = identity<string>("Typescript");
  const b = identity<number>(100);

  // Interface with method

  interface BankAccount {
    balance: number;
    deposit(amount: number): void;
  }

  const account: BankAccount = {
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
    },
  };

  account.deposit(500);
  console.log(account.balance); // 1500

  // Using readonly

  type Student = {
    readonly id: number;
    name: string;
  };

  const s1: Student = { id: 2, name: "Jannat" };
  // s1.id = 20;  error

  // Tuple type
  type Point = [number, number];
  const p1: Point = [10, 20];
  console.log(`X: ${p1[0]}, Y: ${p1[1]}`);

  // Class + Access Modifiers
  class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const p2 = new Person("Jui", 20);
  p2.greet();

  // Generic with Constraints

  function logLength<T extends { length: number }>(value: T) {
    return value.length;
  }

  console.log(logLength("Hello"));
  console.log(logLength([1, 2, 3]));

  // Make all properties optional (using utility types)

  type User = {
    name: string;
    age: number;
    email: string;
  };

  type OptionalUser = Partial<User>;

  const u: OptionalUser = {
    name: "Jui",
  };
}
