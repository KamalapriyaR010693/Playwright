function launchBrowser(browser){
    if(browser === "firefox"){
        console.log("You are inside firefox")
    }else if(browser === "edge"){
        console.log("You are inside edge")
    }else if(browser === "Chrome"){
        console.log("You are inside Chrome")
    }
}

launchBrowser("Chrome")

function runTest(type){
    switch (type){
        case "Smoke":
            console.log("You are inside Smoke")
            break
        case "Regression":
            console.log("You are inside Regression")
            break
        case "Sanity":
            console.log("You are inside Sanity")
            break
        default:
            console.log("You are inside default phase")
            break
    }
}

runTest("Adhoc")