const users = [
    {
        name: "Hannah",
        age: 20,
    },
    {
        name: "Putra",
        age: 30,
    },
    {
        name: "Michael",
        age: 50,
    },
];

const userDewasa = users.filter(function (user) {
    return user.age > 21
});

console.log (userDewasa);