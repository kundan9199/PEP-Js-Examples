const names = ['Tommy','shivam','gopal','shaurya','shaurya']
const petNames =['Pluto','Magic','Coffee']

const combo =[...names, ...petNames];
combo.forEach(n => console.log(n));
const [first, second, third,...rest] = combo;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);


const person = {
    name:'shivam',
    age:20,
    gender:'M'
};

const {name, age, gender} = person;
console.log('---');
console.log(age);
console.log(gender);