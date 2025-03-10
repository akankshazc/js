const student = {

    // data property
    firstName: 'Amena',

    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Amena

// accessing getter methods
console.log(student.getName); // Amena

// trying to access as a method
// console.log(student.getName()); // error