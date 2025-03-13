// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log(Symbol.keyFor(sym)); // hello
console.log(Symbol.keyFor(sym1)); // id