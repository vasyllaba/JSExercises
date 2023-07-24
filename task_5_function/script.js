console.log(isNaN(NaN));

function hello(a, ...b) {
    console.log("Hello from function")
    for (arg of arguments) {
        console.log(arg)
    }
}

hello("a", "b", "c", "d");

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function operation(a, b, func) {
    return func(a, b);
}

console.log(operation(10, 5, subtract));