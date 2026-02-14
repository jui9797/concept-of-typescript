{
  //1. Create a function that takes two numbers and returns their sum

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(5, 7)); // 12

  //2.  Create a type for a user and print the name

  type NewUser1 = {
    name: string;
    email: string;
    age: number;
  };

  const user1: NewUser1 = {
    name: "Jui",
    email: "jui@example.com",
    age: 20,
  };

  console.log(user1.name);
  // Jui

  //3. Optional properties
  type Car = {
    brand: string;
    model: string;
    color?: string;
  };

  const car1: Car = { brand: "Toyota", model: "Corolla" };
  const car2: Car = { brand: "Tesla", model: "X", color: "Black" };

  //4. Create a function that accepts a union type

  function printId(id: string | number) {
    console.log("ID:", id);
  }

  printId(101);
  printId("A-22");

  //5. Narrowing using typeof

  function process(value: string | number) {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //6. Generic function that returns the same value

  function identity<T>(value: T): T {
    return value;
  }

  const a = identity<string>("Typescript");
  const b = identity<number>(100);

  //7. Interface with method

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

  //8. Using readonly

  type Student = {
    readonly id: number;
    name: string;
  };

  const s1: Student = { id: 2, name: "Jannat" };
  // s1.id = 20;  error

  //9. Tuple type
  type Point = [number, number];
  const p1: Point = [10, 20];
  console.log(`X: ${p1[0]}, Y: ${p1[1]}`);

  //10. Class + Access Modifiers
  class Person1 {
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

  const p2 = new Person1("Jui", 20);
  p2.greet();

  //11. Generic with Constraints

  function logLength<T extends { length: number }>(value: T) {
    return value.length;
  }

  console.log(logLength("Hello"));
  console.log(logLength([1, 2, 3]));

  //12. Make all properties optional (using utility types)

  type User2 = {
    name: string;
    age: number;
    email: string;
  };

  type OptionalUser = Partial<User2>;

  const u1: OptionalUser = {
    name: "Jui",
  };

  //13. Pick specific properties
  type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
  };

  type BasicProduct = Pick<Product, "name" | "price">;

  const prod: BasicProduct = {
    name: "Laptop",
    price: 1500,
  };

  //14. Record Utility Type

  const scores: Record<string, number> = {
    Jui: 95,
    Rahim: 88,
  };

  //15. Enum Example

  enum OrderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
  }

  function printStatus(status: OrderStatus) {
    console.log("Status:", status);
  }

  printStatus(OrderStatus.SHIPPED);

  //16.  Function Overloading

  function combine(a: number, b: number): number;
  function combine(a: string, b: string): string;
  function combine(a: any, b: any): any {
    return a + b;
  }

  console.log(combine(10, 20)); // 30
  console.log(combine("Hello ", "World")); // Hello World

  //17. Class with inheritance

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

  //18. Readonly Array

  const numbers: readonly number[] = [10, 20, 30];

  //19. Type Narrowing With in Operator const numbers: readonly number[] = [10, 20, 30];

  type Student3 = { name: string; class: number };
  type Employee1 = { name: string; salary: number };

  function check(obj: Student3 | Employee1) {
    if ("salary" in obj) {
      console.log("Employee Salary:", obj.salary);
    } else {
      console.log("Student Class:", obj.class);
    }
  }

  //20. Create a Custom Type Guard

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

  //21. Discriminated Union
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

  //22. Mapped Type – Make all properties readonly

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

  //23. keyof and Index Signature

  function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const student = {
    name: "Hasan",
    age: 22,
  };

  console.log(getValue(student, "name"));

  //24. Intersection Types

  type Profile = { name: string };
  type Login = { email: string };

  type User = Profile & Login;

  const u: User = {
    name: "Jui",
    email: "jui@mail.com",
  };

  //25. Optional Chaining + Nullish Coalescing

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

  //26. Promise with TypeScript

  function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
  }

  fetchData().then((res) => console.log(res));

  //27.Type-level Function

  type ElementType<T> = T extends (infer U)[] ? U : T;

  type A = ElementType<number[]>; // number
  type B = ElementType<string>; // string

  //28. Infer return type of a function

  function getUser() {
    return {
      id: 1,
      name: "Jui",
      skills: ["JS, TS", "React"],
    };
  }
  type ReturnTypeOfGetUser = ReturnType<typeof getUser>;

  //29. Required + Partial Mix

  type Post = {
    title?: string;
    body?: string;
    author?: string;
  };

  type RequiredTitle<T> = T & { title: string };

  const blog: RequiredTitle<Post> = {
    title: "My Story",
  };

  //30. Extract Keys Based on Value Type

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

  //31. Recursive Type for Nested Comments

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

  //32.  Deep Readonly Utility

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

  //33. Promise Chaining Return Type

  type Awaited<T> = T extends Promise<infer R> ? R : T;

  async function loadData() {
    return { id: 10, status: "ok" };
  }

  type Result2 = Awaited<ReturnType<typeof loadData>>;

  //34. Transform Tuple to Union
  type TupleToUnion<T extends any[]> = T[number];
  type Colors = TupleToUnion<["red", "green", "blue"]>; // "red" | "green" | "blue"

  //35. Type-Safe Event System

  type Events = {
    login: { user: string; time: number };
    logout: { user: string };
  };

  function emit<E extends keyof Events>(event: E, data: Events[E]) {
    console.log(event, data);
  }

  emit("login", { user: "Jui", time: Date.now() });

  //36.  Overload Based on Array

  function processArr(values: number[]): number;
  function processArr(values: string[]): string;
  function processArr(values: any[]) {
    return typeof values[0] === "number"
      ? values.reduce((a, b) => a + b, 0)
      : values.join("");
  }

  console.log(processArr([1, 2, 3])); // 6
  console.log(processArr(["a", "b"])); // "ab"

  //37. Function Argument Type from Object Keys

  const employee = {
    name: "Kabir",
    role: "Developer",
    salary: 50000,
  };

  function getProperty<K extends keyof typeof employee>(key: K) {
    return employee[key];
  }

  console.log(getProperty("role"));

  //38. Create a NonEmptyArray Type

  type NonEmptyArray<T> = [T, ...T[]];

  const nums: NonEmptyArray<number> = [1, 2, 3];
  // const empty: NonEmptyArray<number> = [];  Error

  //39. Make Specific Keys Optional
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

  //40. Extract Function Parameters

  function login(username: string, password: string) {}

  type LoginParams = Parameters<typeof login>;
  // [string, string]

  //41. Remove null and undefined

  type Raw = string | null | undefined;

  type Clean = NonNullable<Raw>; // string

  //42. API Response Wrapper

  type ApiResponse<T> = {
    data: T;
    success: boolean;
    message?: string;
  };

  type UserData = {
    id: number;
    name: string;
  };

  const response: ApiResponse<UserData> = {
    data: { id: 1, name: "Jui" },
    success: true,
  };

  //43. Conditional Property Based on Flag

  type UserRole = { isAdmin: true; permissions: string[] } | { isAdmin: false };

  const admin: UserRole = {
    isAdmin: true,
    permissions: ["read", "write"],
  };

  //44. Convert Object Keys to Uppercase

  type UppercaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
  };

  type Person4 = {
    name: string;
    age: number;
  };

  type Result4 = UppercaseKeys<Person4>;
  // { NAME: string; AGE: number }

  //45. Strongly Typed Config Object

  type Config = {
    port: number;
    env: "dev" | "prod";
  };

  const config2: Config = {
    port: 3000,
    env: "dev",
  };

  // config.env = "test"; ❌ Error

  //46. Template Literal Types
  type EventName<T extends string> = `${T}Event`;
  type ClickEvent = EventName<"click">; // "clickEvent"

  //47. Flatten Nested Array Type
  type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;

  type A2 = Flatten<number[][][]>; // number

  //48. Type-Safe Form Fields

  type FormFields = {
    email: string;
    password: string;
  };

  function updateField<K extends keyof FormFields>(
    field: K,
    value: FormFields[K],
  ) {
    console.log(field, value);
  }

  updateField("email", "test@mail.com");
  // updateField("email", 123); ❌ Error

  //49. Create a DeepPartial Type

  type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
  };

  type Profile2 = {
    name: string;
    address2: {
      city: string;
      zip: number;
    };
  };

  const user4: DeepPartial<Profile2> = {
    address2: {
      city: "Dhaka",
    },
  };

  //50. Enforce At Least One Property

  type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K>;
  }[keyof T];

  type Filters = {
    name?: string;
    age?: number;
  };

  const f1: AtLeastOne<Filters> = { name: "Jui" };
  // const f2: AtLeastOne<Filters> = {};  Error

  //51. Convert Union to Intersection

  type UnionToIntersection<U> = (
    U extends any ? (x: U) => void : never
  ) extends (x: infer R) => void
    ? R
    : never;

  type Result3 = UnionToIntersection<{ a: string } | { b: number }>;
  // { a: string } & { b: number }

  //52. Function That Accepts Exact Object Shape

  type Exact<T, Shape> = T extends Shape
    ? Exclude<keyof T, keyof Shape> extends never
      ? T
      : never
    : never;

  function createUser<T>(user: Exact<T, { name: string; age: number }>) {
    return user;
  }

  createUser({ name: "Jui", age: 20 });
  // createUser({ name: "Jui", age: 20, role: "admin" });

  //52 . Extract Readonly Keys

  type ReadonlyKeys<T> = {
    [K in keyof T]-?: IfEquals<
      { [P in K]: T[K] },
      { -readonly [P in K]: T[K] },
      never,
      K
    >;
  }[keyof T];

  type IfEquals<X, Y, A, B> =
    (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

  type Example = {
    readonly id: number;
    name: string;
  };

  type Keys = ReadonlyKeys<Example>; // "id"

  //53. Strongly Typed Event Listener

  type EventMap = {
    click: { x: number; y: number };
    submit: { formId: string };
  };

  class EventBus {
    on<K extends keyof EventMap>(event: K, cb: (data: EventMap[K]) => void) {}

    emit<K extends keyof EventMap>(event: K, data: EventMap[K]) {}
  }

  const bus = new EventBus();
  bus.emit("click", { x: 10, y: 20 });

  //54. Safe JSON Parse Function
  function safeParse<T>(json: string): T | null {
    try {
      return JSON.parse(json) as T;
    } catch {
      return null;
    }
  }

  type User5 = { id: number; name: string };
  const data = safeParse<User5>('{"id":1,"name":"Jui"}');

  //55. Make Function Parameters Optional

  type OptionalParams<T extends (...args: any) => any> = (
    ...args: Partial<Parameters<T>>
  ) => ReturnType<T>;

  function send(email: string, message: string) {}

  type OptionalSend = OptionalParams<typeof send>;

  //56. Tuple Length as Type
  type Length<T extends readonly any[]> = T["length"];

  type L = Length<[1, 2, 3]>; // 3

  //57. Type-Safe Object Merge

  function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
  }

  const merged = merge({ name: "Jui" }, { age: 20 });
  // { name: string; age: number }

  type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };

  //58. Tuple Length (Recursive)

  type Length2<T extends any[], A extends any[] = []> = T extends [
    infer _,
    ...infer Rest,
  ]
    ? Length2<Rest, [any, ...A]>
    : A["length"];

  type L2 = Length2<[1, 2, 3, 4]>; // 4

  //59. String Length Type

  type StringLength<
    S extends string,
    A extends any[] = [],
  > = S extends `${infer _}${infer Rest}`
    ? StringLength<Rest, [any, ...A]>
    : A["length"];

  type Len = StringLength<"hello">; // 5

  //60. Reverse a Tuple

  type Reverse<T extends any[]> = T extends [infer F, ...infer R]
    ? [...Reverse<R>, F]
    : [];

  type R = Reverse<[1, 2, 3]>;

  //61. Build a Tuple of Length N

  type BuildTuple<
    L extends number,
    T extends any[] = [],
  > = T["length"] extends L ? T : BuildTuple<L, [...T, any]>;

  type Three = BuildTuple<3>;

  //62. Add Two Numbers (Type-Level)
  type Add<A extends number, B extends number> = [
    ...BuildTuple<A>,
    ...BuildTuple<B>,
  ]["length"];

  type Sum = Add<2, 3>; // 5

  //63. Subtract Two Numbers (Type-Level)

  type Subtract<A extends number, B extends number> =
    BuildTuple<A> extends [...BuildTuple<B>, ...infer R] ? R["length"] : never;
  type Diff = Subtract<5, 2>; // 3

  // DeepPartial

  type DeepPartial2<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial2<T[K]> : T[K];
  };

  //64. Object Path (Dot Notation)

  type Paths<T> = {
    [K in keyof T]: T[K] extends object
      ? `${K & string}` | `${K & string}.${Paths<T[K]>}`
      : `${K & string}`;
  }[keyof T];

  type Obj = {
    user: {
      address: {
        city: string;
      };
    };
  };

  type P = Paths<Obj>;

  //65. Deep Value Access
  type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
      ? PathValue<T[K], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never;

  type V = PathValue<Obj, "user.address.city">; // string

  // new commit from android  device.

  //66. Remove Deep Readonly

  type Mutable<T> = {
    -readonly [K in keyof T]: T[K] extends object ? Mutable<T[K]> : T[K];
  };

// commit again from Android. 

// new commit 

// new commit....
//commit commit 
}
