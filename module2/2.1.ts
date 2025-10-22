{
    //


// type assertion
let anything : any
anything = 'Next Level TypeScript';
(anything as string)


const kgToGm = (value: string | number) : string | number | undefined => {
    if(typeof value  === 'string'){
        const convertedValue = parseFloat(value) * 1000;
        return `${convertedValue} gm`;
    }
    if(typeof value === "number"){
        return value*1000
    }
}

const result1 = kgToGm(10) as number ; // 10000
const result2 = kgToGm('10') as string ; // 10000 gm

// custom error message
type CustomError = {
    message: string
}
try{

}catch(error){
    console.log((error as CustomError).message)
}


    //
}