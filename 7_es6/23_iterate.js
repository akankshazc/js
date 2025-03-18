let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}