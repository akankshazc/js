const student = {
    firstName: 'Amena'
}

// getting property
Object.defineProperty(student, "getName", {
    get: function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set: function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Amena

// changing the property value
student.changeName = 'Iris';

console.log(student.firstName); // Iris