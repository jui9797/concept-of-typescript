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

  const a = identity<string>("Hello");
  const b = identity<number>(100);

  function firstElement<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(firstElement([10, 20, 30]));
  console.log(firstElement(["a", "b", "c"]));
}
