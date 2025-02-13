enum Environment{
    LOCAL, 
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTest(env: Environment){
    console.log("Environment: ", env);
    return;
}

runTest(Environment.LOCAL);
runTest(Environment.DEVELOPMENT);
runTest(Environment.STAGING);
runTest(Environment.PRODUCTION);