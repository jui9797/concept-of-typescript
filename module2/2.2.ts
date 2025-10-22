{

// interface
type User1 = {
    name: string
    age: number
};

type UserWithRole1 = User1 & {role : string}    // intersection type use role add kora hoise .

const user2 : UserWithRole1 ={
    name: 'John Doe',
    age: 30,
    role: 'admin'
}


interface User2 {
    name: string;
    age: number ;
}

interface UserWithRole2 extends User2 { // interface er khetre extend use kora hoyeche .
    role : string
}

const user1 : User2 ={
    name: 'John Doe',
    age: 30
}
const user3 : UserWithRole2 ={
    name: 'John Doe',
    age: 30,
    role: 'admin'
}


// array r khetre
type Roll = number[]

// interface use
interface Roll2 {
    [index : number] : number // array er khetre index er type number hobe .
    // [index : number] : string // array er khetre index er type string hote parbe na .
}

const rollNumber1 = [1,2,3,4,5,6] as Roll // type assertion use kora hoyeche .
const rollNumber2 : Roll2 = [1,2,3,4,5,6] // interface use kora hoyeche .


// function ar khetre
type Add = (a: number, b: number) => number // function er khetre type alias use kora hoyeche .

interface Add2 {
    (a: number, b:number) :number
}


const add : Add = (a,b) =>{
    return a + b;
}
add(2,4)

const add2 : Add2 = (a,b) => a+b // interface use kora hoyeche .
add2(2,4)


// difference : type alias primitive data r jnno use kora jai  interface non promitive data r jnno use hoi . primitive data te interface use kora jaina karon interface suru hoi object diye sob primitive ar jonno type alias  use kora jabe . non primitive data r jnno interface, type alias 2 tai use kora jabe .



}