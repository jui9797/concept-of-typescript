"use strict";
{
    //
    // type assertion
    let anything;
    anything = 'Next Level TypeScript';
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `${convertedValue} gm`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(10); // 10000
    const result2 = kgToGm('10'); // 10000 gm
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
