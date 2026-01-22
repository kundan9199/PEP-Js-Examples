const person = {
    name : "Tommy",
    age : 2
}
console.log(person)
const jsonPerson = JSON.stringify(person, null, 2);
console.log(JSON.parse(jsonPerson));