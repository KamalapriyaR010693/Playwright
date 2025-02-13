//function functionName(parameterName: parameterType): returnType
function fibonacci(n: number): number[] {
    if(n<0){
        throw new Error("Factorial is not defined for negative numbers"); 
    }

    const series: number[] = [];
    let a=0;
    let b=1;
    for(let i=2; i<=n; i++){
        series.push(a);
        const temp=a+b;
        a=b;
        b=temp;
    }
    return series;
}
let num = 9;
console.log(`Fibonacci of ${num} is ${fibonacci(num).join(', ')}`);