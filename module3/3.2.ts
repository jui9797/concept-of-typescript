{
  //opp -inheritence
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const students1 = new Student("Mr.Anwar", 20, "Bangladesh");
  //   students1.  // aikhne Person class ar method gola access kora jabe .

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes today`);
    }
  }
  const teacher = new Teacher("Mr.Rahim", 35, "Bangladesh", "Math Teacher");
  teacher.takeClass(5);
}
