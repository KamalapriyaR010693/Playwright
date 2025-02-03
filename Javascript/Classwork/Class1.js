console.log("Hello!");

//Data types: var, typeof
var username = 'KP';
console.log("The datatype of username is: ", typeof username);

//We can assign a value using " " ' '  or ` `(backtick)
var user = "KP"
var user = 'KP'
var user = `KP`
console.log("The datatype of username is: ", typeof user);
var value = true
var passwrod
var isnull = null
console.log("The datatype of isnull is: ", typeof isnull);

//hoisting
console.log("Company before assignment: "+typeof company) //internally it will declare a variable as 'company' but the assigning will be undefined
var company = "CG"
console.log("Company after assignment: "+typeof company)

console.log("Company before assignment: "+typeof company1)
let company1 = "CG"
console.log("Company after assignment: "+typeof company1)

// console.log("Company before assignment: "+typeof company2)
// const company2 = "CG"
// console.log("Company after assignment: "+typeof company2)