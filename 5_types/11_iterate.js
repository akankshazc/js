let studentsData = [["Jack", 24], ["Sara", 23]];

// loop over outer array
for (let i = 0; i < studentsData.length; i++) {

    // loop over inner array elements
    for (let j = 0; j < studentsData[i].length; j++) {
        console.log(studentsData[i][j]);
    }
}