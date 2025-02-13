function conditionalPromise(data) {
    return new Promise(function (resolve, reject) {
        if (data > 0.5) {
            resolve("Resolved successfully");
        }
        else {
            reject("Rejected");
        }
    });
}
var inputData = 0.25;
conditionalPromise(inputData)
    .then(function (message) { return console.log(message); })
    .catch(function (error) { return console.error(error); });
