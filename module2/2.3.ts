{
    // generic type
    
    type GenericArray<T> = Array<T>;


    // const rollNumber : number[] = [3,5,7]
    // const rollNumber : Array<number> = [3,5,7]
    
    const rollNumber : GenericArray<number> = [3,5,7]

    // const mentor : string[] = ['ridoy', 'safi', 'nashit']
    // const mentor : Array<string> = ['ridoy', 'safi', 'nashit']
    const mentor : GenericArray<string> = ['ridoy', 'safi', 'nashit']

    // const isTrue : boolean[] = [true, false, true]
    // const isTrue : Array<boolean> = [true, false, true]
    const isTrue : GenericArray<boolean> = [true, false, true]


    const user :GenericArray<{name: string; age: number;}> = [ {
        name: 'jui',
        age: 25
    },
    {
        name: 'olly',
        age: 26
    }
]




// generic tuple
type GenericTuple<x,y> = [x,y]
const couple1 : GenericTuple<string, string> = ['deb', 'mintu']

interface Counple {
    name: string;
    email: string;
}

const UserWithID: GenericTuple<number, Counple> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];


//   other way
const UserWithId2 : GenericTuple<number, {name: string; age: number}> = [
    124,
    {name: 'mina', age:24}
]
   
}