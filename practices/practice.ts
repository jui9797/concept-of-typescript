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
}
