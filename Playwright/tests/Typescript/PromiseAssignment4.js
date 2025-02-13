function fetchDataFromDatabase(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Executed after 3 seconds");
            if (data) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Failed to fetch data");
            }
        }, 3000);
    });
}
var data = false;
fetchDataFromDatabase(data)
    .then(function (message) { return console.log(message); })
    .catch(function (error) { return console.error(error); });
