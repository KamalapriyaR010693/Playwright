var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 0] = "LOCAL";
    Environment[Environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTest(env) {
    console.log("Environment: ", env);
    return;
}
runTest(Environment.LOCAL);
runTest(Environment.DEVELOPMENT);
runTest(Environment.STAGING);
runTest(Environment.PRODUCTION);
