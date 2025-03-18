let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}