const users = [
    {username: "ppc90", age: 30, premium: false},
    {username: "lu65", age: 24, premium: false},
    {username: "maria3", age: 36, premium: false},
    {username: "abc123", age: 20, premium: true},
    {username: "ppc9sergio58", age: 26, premium: true}
];

const premium = users.filter(function(user){
    return user.premium == true
});

const nopremium = users.filter(function(user){
    return user.premium == false
});


console.log("Usuarios premium:", premium);
console.log("Usuarios no premium:", nopremium);

for (const usuario of premium){
    console.log("El usuario " + usuario.username + " es un usuario Premium.")
};

//También se puede hacer así:
// users.map(function(user){
//     if (user.premium == true){
//         console.log("El usuario " + user.username + " tiene cuenta Premium.")
//     }
// })