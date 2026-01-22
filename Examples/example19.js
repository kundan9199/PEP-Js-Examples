const persons = [
  [
    {
      name: "kundan",
      age: 21,
    },
    {
      name: "prashant",
      age: 21,
    },
  ],
  [
    {
      name: "shivam",
      age: 21,
    },
  ],
];

// person.map((p, i)=>{
//     return i +"."+p.name
// }).forEach(n => console.log(n));

persons.flatMap((arr, i) => {
    return arr.map((p) => p.name);
  })
  .forEach((n) => console.log(n));
