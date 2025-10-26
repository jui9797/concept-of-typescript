{
  //polymorphisom
  //common class
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  //student class
  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  //developer class
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  //common function which accepts parent class type parameter
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  //usage
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //calling common function with different class objects
  getSleepingHours(person1); //I am sleeping for 8 hours per day
  getSleepingHours(person2); //I am sleeping for 7 hours per day
  getSleepingHours(person3); //I am sleeping for 6 hours per day

  //another example
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //pi*r*r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //height* width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  //base function
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1); //0
  getShapeArea(shape2); //3.1416592653589793
  getShapeArea(shape3); // 200
}
