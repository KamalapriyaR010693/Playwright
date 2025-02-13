function fetchDataFromDatabase(data: any): Promise<string> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Executed after 3 seconds");
            if(data){
                resolve("Data fetched successfully");
            }else{
                reject("Failed to fetch data");
            }
        }, 3000);
    });
}
const data = false;
fetchDataFromDatabase(data)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));