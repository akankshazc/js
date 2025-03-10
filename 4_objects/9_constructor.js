// constructor function
function Person() {
    this.name = "Mensah",
        this.age = 42,

        this.greet = function () {
            console.log("hello");
        }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // Mensah
console.log(person2.name);  // Mensah