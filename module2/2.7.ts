{

// generic constraint of key operator
type Vehiecle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = 'bike' | 'car' | 'ship' //manually union type  Owner ar  hoi bike ase noito car ase noito ship ase 

type Owner2 = keyof Vehiecle;     // using keyof   same  as above

const person2 : Owner2 = 'bike'    // bike, car, ship  er modhye jekonota hote pare


function getPropertyValue<X, Y extends keyof X> (obj: X, key: Y) {      //Y extends keyof X mane obj er modhye jekono key er value pabo
    // X er modhye jodi key na thake tahole error dibe
    return obj[key]
}

const user ={
    name: 'jui',
    age: 22,
    address: 'ngn'
}

const result1 = getPropertyValue(user, 'name')  // jui





}