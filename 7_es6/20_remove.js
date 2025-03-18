let map1 = new Map();
map1.set('info', { name: 'Jack', age: "26" });

// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

map1.delete('info'); // true
console.log(map1); 