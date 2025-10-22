"use strict";
{
    // learning constraints in generics
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: "Mr. Pashan",
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Bangladesh", 222);
    const res11 = createArrayWithTuple("Bangladesh", {
        name: "Asia",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addCourseToStudent({
        id: 44,
        name: "Mr. Z",
        email: "z@gmail.com",
        emni: "emni",
    });
    const student1 = addCourseToStudent({
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
