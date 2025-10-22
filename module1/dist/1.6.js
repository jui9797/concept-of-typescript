"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4); // 6
// Arrow function  (a function inside an object is called method)
const addArrow = (num1, num2) => {
    return num1 + num2;
};
const poorUser = {
    name: 'jannat',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
// map method
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((elem) => elem * elem //callback function
);
