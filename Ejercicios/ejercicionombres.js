const array = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
];

const soloNombres = array.map(function onlyNames(array){
    return array.name
});

console.log(soloNombres)


const angbob = array.filter(function ofAge(array){
    return array.age > 50;
});

console.log(angbob);

