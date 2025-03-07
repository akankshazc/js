function display() {

    console.log("This will be executed.");

    return "Returning from function.";

    console.log("This will not be executed.");
}

let message = display();
console.log(message);  