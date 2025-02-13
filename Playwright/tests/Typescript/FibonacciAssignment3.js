//function functionName(parameterName: parameterType): returnType
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    var series = [];
    var a = 0;
    var b = 1;
    for (var i = 2; i <= n; i++) {
        series.push(a);
        var temp = a + b;
        a = b;
        b = temp;
    }
    return series;
}
var num = 9;
console.log("Fibonacci of ".concat(num, " is ").concat(fibonacci(num).join(', ')));
