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

  type User2 = {
    name: string;
    age: number;
    email: string;
  };

  type OptionalUser = Partial<User2>;

  const u: OptionalUser = {
    name: "Jui",
  };

  // Pick specific properties
  type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
  };

  type BasicProduct = Pick<Product, "name" | "price">;

  const p: BasicProduct = {
    name: "Laptop",
    price: 50000,
  };

  //Record Utility Type

  const scores: Record<string, number> = {
    Jui: 95,
    Rahim: 88,
  };

  //Enum Example

  enum OrderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
  }

  function printStatus(status: OrderStatus) {
    console.log("Status:", status);
  }

  printStatus(OrderStatus.SHIPPED);

  // Tuple type

  const student: [string, number] = ["Jui", 20];

  // Function Overloading

  function combine(a: number, b: number): number;
  function combine(a: string, b: string): string;
  function combine(a: any, b: any): any {
    return a + b;
  }

  console.log(combine(10, 20)); // 30
  console.log(combine("Hello ", "World")); // Hello World

  // Class with inheritance

  class Animal {
    constructor(public name: string) {}

    sound() {
      console.log("Some sound...");
    }
  }

  class Dog extends Animal {
    sound() {
      console.log("Woof!");
    }
  }

  const d = new Dog("Tommy");
  d.sound();

  // Readonly Array

  const numbers: readonly number[] = [10, 20, 30];

  // Type Narrowing With in Operator const numbers: readonly number[] = [10, 20, 30];

  type Student3 = { name: string; class: number };
  type Employee = { name: string; salary: number };

  function check(obj: Student3 | Employee) {
    if ("salary" in obj) {
      console.log("Employee Salary:", obj.salary);
    } else {
      console.log("Student Class:", obj.class);
    }
  }

  // Create a Custom Type Guard

  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  function test(v: unknown) {
    if (isString(v)) {
      console.log(v.toUpperCase());
    } else {
      console.log("Not a string");
    }
  }
}

function test(v: unknown) {
  if (isString(v)) {
    console.log(v.toUpperCase());
  } else {
    console.log("Not a string");
  }

  //Discriminated Union
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function area(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius * shape.radius;
      case "rectangle":
        return shape.width * shape.height;
    }
  }

  // Mapped Type – Make all properties readonly

  type ReadonlyAll<T> = {
    readonly [K in keyof T]: T[K];
  };

  type Person = {
    name: string;
    age: number;
  };

  const p: ReadonlyAll<Person> = {
    name: "Jui",
    age: 20,
  };

  //keyof and Index Signature

  function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const student = {
    name: "Hasan",
    age: 22,
  };

  console.log(getValue(student, "name"));

  // Intersection Types

  type Profile = { name: string };
  type Login = { email: string };

  type User = Profile & Login;

  const u: User = {
    name: "Jui",
    email: "jui@mail.com",
  };

  //Optional Chaining + Nullish Coalescing

  type Employee = {
    name: string;
    address?: {
      city?: string;
    };
  };

  const emp: Employee = {
    name: "Jui",
  };

  const city = emp.address?.city ?? "Unknown";
  console.log(city);

  // Promise with TypeScript

  function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
  }

  fetchData().then((res) => console.log(res));

  //Type-level Function

  type ElementType<T> = T extends (infer U)[] ? U : T;

  type A = ElementType<number[]>; // number
  type B = ElementType<string>; // string

  //Infer return type of a function

  function getUser() {
    return {
      id: 1,
      name: "Jui",
      skills: ["JS, TS", "React"],
    };
  }
  type ReturnTypeOfGetUser = ReturnType<typeof getUser>;

  //Required + Partial Mix

  type Post = {
    title?: string;
    body?: string;
    author?: string;
  };

  type RequiredTitle<T> = T & { title: string };

  const blog: RequiredTitle<Post> = {
    title: "My Story",
  };

  // Extract Keys Based on Value Type

  type User3 = {
    id: number;
    name: string;
    email: string;
    verified: boolean;
  };

  type OnlyStringKeys<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
  }[keyof T];

  type Result = OnlyStringKeys<User3>; // "name" | "email"

  // Recursive Type for Nested Comments

  type Comment = {
    id: number;
    text: string;
    replies?: Comment[];
  };

  const example: Comment = {
    id: 1,
    text: "This is a comment",
    replies: [
      {
        id: 2,
        text: "Nested reply",
      },
    ],
  };

  // : Deep Readonly Utility

  type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
  };

  type Settings = {
    theme: {
      dark: boolean;
      fontSize: number;
    };
    language: string;
  };

  const config: DeepReadonly<Settings> = {
    theme: { dark: true, fontSize: 16 },
    language: "English",
  };

  //Promise Chaining Return Type

  type Awaited<T> = T extends Promise<infer R> ? R : T;

  async function loadData() {
    return { id: 10, status: "ok" };
  }

  type Result2 = Awaited<ReturnType<typeof loadData>>;

  //Transform Tuple to Union
  type TupleToUnion<T extends any[]> = T[number];
  type Colors = TupleToUnion<["red", "green", "blue"]>; // "red" | "green" | "blue"

  //Type-Safe Event System

  type Events = {
    login: { user: string; time: number };
    logout: { user: string };
  };

  function emit<E extends keyof Events>(event: E, data: Events[E]) {
    console.log(event, data);
  }

  emit("login", { user: "Jui", time: Date.now() });

  // Overload Based on Array

  function processArr(values: number[]): number;
  function processArr(values: string[]): string;
  function processArr(values: any[]) {
    return typeof values[0] === "number"
      ? values.reduce((a, b) => a + b, 0)
      : values.join("");
  }

  console.log(processArr([1, 2, 3])); // 6
  console.log(processArr(["a", "b"])); // "ab"

  // Function Argument Type from Object Keys

  const employee = {
    name: "Kabir",
    role: "Developer",
    salary: 50000,
  };

  function getProperty<K extends keyof typeof employee>(key: K) {
    return employee[key];
  }

  console.log(getProperty("role"));

  //Create a NonEmptyArray Type

  type NonEmptyArray<T> = [T, ...T[]];

  const nums: NonEmptyArray<number> = [1, 2, 3];
  // const empty: NonEmptyArray<number> = [];  Error

  //Make Specific Keys Optional
  type NewUser = {
    id: number;
    name: string;
    email: string;
  };

  type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

  const user: MakeOptional<NewUser, "email"> = {
    id: 1,
    name: "Jui",
  };

  //Extract Function Parameters

  function login(username: string, password: string) {}

  type LoginParams = Parameters<typeof login>;
  // [string, string]
}
