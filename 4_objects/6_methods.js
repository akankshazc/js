const person = {
    name: "Bob",
    age: 30,

    // use function as value
    reason: function () {
        console.log("Because BOB!");
    }
};

// call object method
person.reason();  