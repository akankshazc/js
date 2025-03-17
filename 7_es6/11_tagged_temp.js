function displayMessage(message) {
    return message;
}

// create a tagged template
let result = displayMessage`Hello Jack`;

console.log(result);  // [ 'Hello Jack' ]