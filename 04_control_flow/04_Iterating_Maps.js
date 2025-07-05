const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);


const myMap2 = new Map()
myMap2.set('IN','India')
myMap2.set('NEP', 'Nepal')
myMap2.set('FR', 'France')
myMap2.set('IN','India')

//method-1
for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

//method-2
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// only keys
for (const key of myMap.keys()) {
  console.log(key);
}


// only values
for (const value of myMap.values()) {
  console.log(value);
}

for (const [key, value] of myMap2.entries()) {
  console.log(`${key} => ${value}`);
}



