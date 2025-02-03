let name;
function userProfile(name){
    console.log("Hello! "+name)
}
userProfile("KP")

//Arrow Function
let double = (number) =>{
    console.log("Double of given number: "+number*2)
}

double(2)

//Anonymus function - An anonymous function is a function without a name. It is typically assigned to a variable, passed as an argument, or used as an immediately invoked function expression (IIFE).
let numSec = 2
setTimeout(function(numSec){ //setTimeout is a builtIn function of JS
        console.log("This message is delayed by 2 seconds")
}, numSec *1000)

//Call BackFunction
function getUserData(callback){
    let numSec = 2
    setTimeout(()=> {  const user = {name: "Alice",age: 23};
                callback(user);},3000);
}

function userData(user){
    console.log("User Details: ",user)
}
getUserData(userData)