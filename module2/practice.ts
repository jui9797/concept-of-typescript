// task-1: Write a TypeScript program that outputs a welcome message.
let welcomeMessage: string = "Welcome to TypeScript programming!";
// console.log(welcomeMessage);

/**
 * Lenovo@DESKTOP-IMRVCRG MINGW64 /d/next-level-course/mission-1-ts/module2 (main)
$ npx tsx practice.ts
Welcome to TypeScript programming!
 */

//Task-2: Create a function with parameters and an optional literal type.
const userInfo = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): void => {
  const userRole = role ?? "guest"; //Nullish Coalescing Operator = role jodi null or undefined thake tahole "guest" assign korbe

  //   console.log(`Name: ${name}`);
  //   console.log(`Age: ${age}`);
  //   console.log(`Role: ${userRole}`);
};
userInfo("Juiena", 25, "admin"); //Name: Juiena Age: 25 Role: admin
userInfo("Rafi", 22); //  Name: Rafi Age: 22 Role: guest

// Task-3: Define a structured Person object using Type Aliases
type Person = {
  name: string;
  address: string;
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: "single" | "married" | "divorced" | "widowed"; // literal type
  friends: string[];
};

const person1: Person = {
  name: "Juiena Parvin",
  address: "Rajshahi, Bangladesh",
  hairColor: "Black",
  eyeColor: "Brown",
  income: 50000,
  expense: 20000,
  hobbies: ["Reading", "Coding", "Traveling"],
  familyMembers: ["Father", "Mother", "Brother"],
  job: "Front-End Developer",
  skills: ["React", "TypeScript", "Node.js"],
  maritalStatus: "single",
  friends: ["Rafi", "Nusrat", "Tuhin"],
};

// console.log(person1);

// Task-4: Create union and intersection types using interfaces.
interface Book {
  title: string;
  pages: number;
}
interface Magazine {
  title: string;
  pages: number;
  publisher: string;
}

type IsBookOrMagazine = Book | Magazine; // union type
type IsBookAndMagazine = Book & Magazine; // intersection type

const readingMaterial: IsBookOrMagazine = {
  // union type
  title: "Tech Monthly",
  pages: 120,
};
// console.log(readingMaterial);   //{ title: 'Tech Monthly', pages: 120 }

const detailedMaterial: IsBookAndMagazine = {
  // intersection type
  title: "Tech Monthly",
  pages: 120,
  publisher: "Tech Publishers",
};
// console.log(detailedMaterial);    //{ title: 'Tech Monthly', pages: 120, publisher: 'Tech Publishers' }

// Task-5:  Write a function that reverses a string.
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};
const revered = reverseString("Jannat");
// console.log(revered);    //tan naJ

//Task-6: Write a function that uses the rest operator for variable-length arguments.
const sumNumbers = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};
const totalSum = sumNumbers(10, 20, 30, 40, 50);
// console.log(totalSum);   //150

//Task-7: Write a function that behaves differently based on the input type.
const processInput = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
};
const result1 = processInput("hello");
const result2 = processInput(25);
// console.log(result1);    //5
// console.log(result2);       //625

//Task-8: Practice using intersection types.
type CommonUser = {
  name: string;
  email: string;
};
type AdminTypeUser = {
  adminLevel: number;
};
type AdminUser = CommonUser & AdminTypeUser;

const IsAdmin = (user: AdminUser): void => {
  return console.log(
    `Name: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`
  );
};
const adminUser1: AdminUser = {
  name: "Juiena Parvin",
  email: "admin@gmail.com",
  adminLevel: 1,
};
IsAdmin(adminUser1); //Name: Juiena Parvin, Email:admin@gmail.com, Admin Level: 1

//Task-9: Use optional chaining with nested objects.
type Employee = {
  name: string;
  address?: {
    city?: string;
    country?: string;
  };
};

function getEmployeeCity(employee: Employee): string | undefined {
  // Use optional chaining to safely access employee.address.city
  return employee.address?.city;
}

const employee1: Employee = {
  name: "Juiena",
  address: {
    city: "Rajshahi",
    country: "Bangladesh",
  },
};

const employee2: Employee = {
  name: "Rafi",
};

// console.log(getEmployeeCity(employee1));    // Output: "Rajshahi"
// console.log(getEmployeeCity(employee2));     // Output: undefined

//Task-10: Handle null and undefined values using nullish coalescing.

const getDisplayName = (name: string | null | undefined): string => {
  if (name) {
    return name;
  } else {
    return "Anonymous User";
  }
};
// console.log(getDisplayName("Juiena")); // Output: "Juiena"
// console.log(getDisplayName(null)); // Output: "Anonymous User"
// console.log(getDisplayName(undefined)); // Output: "Anonymous User"

// Task-11: Handle different types with the unknown type.
const processData = (data: unknown): void => {
  if (typeof data === "string") {
    console.log("String data:", data.toLocaleUpperCase());
  } else if (typeof data === "number") {
    console.log("Number data:", data * data);
  } else {
    console.log("Unknown data type");
  }
};
// processData("Hello TypeScript");   //String data: HELLO TYPESCRIPT
// processData(42);     // Number data: 1764
// processData(true);      // Unknown data type

//Task-12: Handle different types with the unknown type.
const handleError = (message: string): never => {
  throw new Error(message);
};

// Example usage
try {
  handleError("Something went wrong!");
} catch (error) {
  console.log("Caught error:", (error as Error).message);
}

//Task-13: Use generics to handle different types.
const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];

const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));       // Output: [1, 2, 3, 4, 5]

const strings = ["apple", "banana", "apple", "orange"];
// console.log(removeDuplicates(strings)); // Output: ["apple", "banana", "orange"]

const mixed = [1, "1", 2, "2", 1, 2];
// console.log(removeDuplicates(mixed)); // Output: [1, "1", 2, "2"]

//Task-14: Simulate an asynchronous operation with TypeScript.
type User = {
  name: string;
  age: number;
};

// Async function that simulates fetching user data
const fetchUserData = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Juiena Parvin",
        age: 25,
      });
    }, 2000); // 2-second delay
  });
};
const getUser = async () => {
  //   console.log("Fetching user data...");
  const user = await fetchUserData();
  //   console.log("User data received:", user);
};

getUser();

//Task-15: Create custom type guards for more accurate type checking.

const isString = (value: unknown): value is string => typeof value === "string"; //This is the return type of the function, but it’s a special kind called a type predicate. If this function returns true, then value can safely be treated as a string from this point onward.

const printUpperCase = (value: unknown): void => {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string!");
  }
};

printUpperCase("Hello TypeScript"); // Output: HELLO TYPESCRIPT
printUpperCase(123); // Output: Not a string!
printUpperCase(true); // Output: Not a string!

// Task-16: Access object properties dynamically using keyof.
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
const person = {
  name: "Juiena",
  age: 25,
  job: "Front-End Developer",
};

console.log(getProperty(person, "name")); // Output: Juiena
console.log(getProperty(person, "age")); // Output: 25

// const invalid = getProperty(person, "salary"); // Error: 'salary' is not a key of 'person'
