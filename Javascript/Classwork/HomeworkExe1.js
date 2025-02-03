const browserVersion = "Chrome"

function getBrowserVersion(){
    let browserRedefined = browserVersion
    if(browserVersion == "Chrome"){
        //var browserVersion = "v3.2"
        console.log("Browser version: "+browserVersion)
        browserRedefined = "v4.5"
    }
    console.log("Browser Redefined version: "+browserRedefined)
}

getBrowserVersion()
console.log("Browser last version: "+browserVersion)