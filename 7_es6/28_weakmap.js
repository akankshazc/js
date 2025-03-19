const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}