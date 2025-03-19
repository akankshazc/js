const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
// for (let i of weakMap) {

//     console.log(i);  // TypeError
// }