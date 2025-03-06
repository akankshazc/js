let sum = 0, num = 0;

do {

    // add all positive numbers
    sum += num;

    // take input from the user
    num = parseInt(prompt("Enter a number: "));

    // loop terminates if num is negative
} while (num >= 0);

// last, display sum
console.log(`The sum is ${sum}`);