let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let values of map1.values()) {
    console.log(values);
}