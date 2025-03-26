const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); // 1593765214488

const time = new Date;

// get day of the month
const date = time.getDate();
console.log(date);

// get day of the week
const year = time.getFullYear();
console.log(year);

const utcDate = time.getUTCDate();
console.log(utcDate);

const event = new Date('Feb 19, 2025 23:15:30');
// set the date
event.setDate(15);
console.log(event.getDate()); // 15

// Only 28 days in February!
event.setDate(35);

console.log(event.getDate()); 