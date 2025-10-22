{
// learning constraints in generics

const createArray = (params : string) : string[] =>{
    return [params];
}
const createArrayWithGeneric = <T>(params : T) : T[] =>{
    return [params];
}

const res1 = createArray('Bangladesh')
const resGeneric = createArrayWithGeneric<string>('Bangladesh')

type User = { id: number; name: string };

const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T,Q] =>{
    return [param1, param2];
  }

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,  //
    name: "Mr. Z",  //extended
    email: "z@gmail.com",   //
    emni: "emni",    //-----T
  });


  const student1 = addCourseToStudent<{
    id: number;
    name: string;     ///----T
    email: string;
    devType: string;
  }>({
    id: 111,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 222,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

}