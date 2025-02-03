//CallBack function -To make a asynchronus function, synchronus

function greetEveryone(name,call){
    console.log("Hello! "+name)
    call()
}

function displayThanks(){
    console.log("Thank you!")
}

greetEveryone("Kamalapriya",displayThanks)

//String Declarations
/* Two types:
    1. String Literal
    2. String Objects */

// 1. String Literals: " ",' ', ` ` -> Shares memory location for both companyName and firstName because value is same
let companyName = "CG"
let firstName = "CG" 
console.log(companyName===firstName) //===/== -> Checks if both have same data,datatype and memory location
console.log("CompanyName dataType: "+typeof companyName , "firstName dataType: "+typeof firstName)
// 2. String Object
let companyName1 = new String("CG")
let firstName1 = new String("CG")
console.log(companyName1===firstName1)
console.log("CompanyName dataType: "+typeof companyName1 , "firstName dataType: "+typeof firstName1)

// 3. Concatination

//4. Template  //This will work with only backtick ``
console.log(`CompanyName dataType: ${companyName1}` , 'firstName dataType: ${firstName1}')
//5. length

//6. charAt()