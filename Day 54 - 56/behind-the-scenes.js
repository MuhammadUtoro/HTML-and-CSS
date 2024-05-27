// primitive values: numbers, strings, booleans, undefined
// reference values: Objects

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');

console.log(hobbies);

const person = {age: 32};

function getAdultYears(p) {
    // p.age -= 18;
    return p.age - 18;
};

console.log(getAdultYears({ ...person }));
console.log(person);