function printOddNumbers(){
    for(let i=1;i<=25;i++){
        if(i%2 !== 0){
            console.log("Printed odd number: "+i)
        }
    }
}
printOddNumbers() //It will not print any values without this method call as we do not have any main() as in java