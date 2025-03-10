// person object
const person = {
    name: "Mensah",
    age: 42,

    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

// access the introduce() method
person.introduce();
