{
  //utility types
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  person1.name = "Mr. YZ"; // Error: Cannot assign to 'name' because it is a read-only property.

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>; // first string for keys, second for values

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6, // Error: Type 'number' is not assignable to type 'string'.
  };

  //
}
