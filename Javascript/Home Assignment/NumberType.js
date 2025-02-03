let number;
function NumberType(number){
    if(number==0){
        console.log("Number is neutral")
    }else if(number<0){
        console.log("It is a negative number")
    }else if(number>0){
        console.log("It is a positive number")
    }
}

NumberType(0.12)