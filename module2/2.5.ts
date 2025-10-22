{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  // dynamic generic function
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  // declare object type
  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    // generic type T extends object
    const course = "Next Level Web Development"; // course is fixed
    return {
      ...student, // spread opertor here student object contain different properties dynamically
      course, //fixed property
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  console.log(student1);
  console.log(student2);

  //
}

/**
 * Lenovo@DESKTOP-IMRVCRG MINGW64 /d/next-level-course/mission-1-ts (main)
$ cd module2

Lenovo@DESKTOP-IMRVCRG MINGW64 /d/next-level-course/mission-1-ts/module2 (main)
$ npx tsx 2.5.ts
{
  name: 'Mr X',
  email: 'x@gmail.com',
  devType: 'NLWD',
  course: 'Next Level Web Development'
}
{
  name: 'Mr Y',
  email: 'y@gmail.com',
  hasWatch: 'Apple Watch',
  course: 'Next Level Web Development'
}
 */
