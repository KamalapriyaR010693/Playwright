function factorial(n) {
    //Include a check to ensure that the factorial is not computed for negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    var result = 1;
    //Use a loop to compute the factorial of n
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Test the factorial function
// console.log(factorial(5));
console.log(factorial(-3));
