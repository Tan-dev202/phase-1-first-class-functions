function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("Hello, check this message!");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function output");
    }
}