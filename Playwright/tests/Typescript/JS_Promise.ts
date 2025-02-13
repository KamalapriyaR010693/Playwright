function conditionalPromise(data: any): Promise<string> {
    return new Promise((resolve,reject) => {
            if(data>0.5){
                resolve("Resolved successfully");
            }else{
                reject("Rejected");
            }
    });
}
let inputData = 0.25;
conditionalPromise(inputData)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));