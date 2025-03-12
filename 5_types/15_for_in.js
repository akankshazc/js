const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
};

// use for...in to loop through
// properties of salaries
for (let i in salaries) {

    // access object key using [ ]
    // add a $ symbol before the key
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i}: ${salary}`);
};