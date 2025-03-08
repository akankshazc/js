// declare global variable
var message = "Hello";

function greet() {
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);