//Object literals using dot operator

// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

let obj : {  //'=' will refer dataType as values instead of types. so we need to use ':' to refer as types
    firstName: string,
    lastName: string,
    age: number,
    isActive: boolean
}={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isActive: true
}

// console.log(obj.firstName);

//Method 2: Square bracket
console.log(obj['age']);