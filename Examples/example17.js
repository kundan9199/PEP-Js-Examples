const person =[
    {
        name: "gopal",
        age : 20
    },
    {
        name: "prasant",
        age:21
    }
];

const v = function anc(p){
    console.log("Hi");
    console.log(p);
}
person.forEach(v);