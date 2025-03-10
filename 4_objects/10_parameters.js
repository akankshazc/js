// constructor function with parameters
function Person(person_name, person_age, person_gender) {

    // assign parameter values to the calling object
    this.name = person_name,
        this.age = person_age,
        this.gender = person_gender,

        this.greet = function () {
            return (`Hi ${this.name}`);
        }
}

// create objects and pass arguments
const person1 = new Person("Mensah", 42, "female");
const person2 = new Person("Amena", 19, "female");

// access properties
console.log(person1.name); // Mensah
console.log(person2.name); // Amena