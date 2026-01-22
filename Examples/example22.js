const person = {
    name : 'john',
    age:87,
    gender:"M"
}
console.log(person);

let cp = person;
cp.age = 23;
console.log(person);
console.log(cp);
