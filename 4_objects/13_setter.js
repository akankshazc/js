const student = {
    firstName: 'Amena',

    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Amena

// change(set) object property using a setter
student.changeName = 'Iris';

console.log(student.firstName); // Iris