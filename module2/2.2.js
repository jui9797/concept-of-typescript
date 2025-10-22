"use strict";
{
    const user2 = {
        name: 'John Doe',
        age: 30,
        role: 'admin'
    };
    const user1 = {
        name: 'John Doe',
        age: 30
    };
    const user3 = {
        name: 'John Doe',
        age: 30,
        role: 'admin'
    };
    const rollNumber1 = [1, 2, 3, 4, 5, 6]; // type assertion use kora hoyeche .
    const rollNumber2 = [1, 2, 3, 4, 5, 6]; // interface use kora hoyeche .
    const add = (a, b) => {
        return a + b;
    };
    add(2, 4);
    const add2 = (a, b) => a + b; // interface use kora hoyeche .
    add2(2, 4);
    // difference : type alias primitive data r jnno use kora jai  interface non promitive data r jnno use hoi . primitive data te interface use kora jaina karon interface suru hoi object diye sob primitive ar jonno type alias  use kora jabe . non primitive data r jnno interface, type alias 2 tai use kora jabe .
}
