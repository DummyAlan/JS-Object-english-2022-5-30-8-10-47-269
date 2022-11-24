var user = Object.create(null);
user.name = "John";
user.surname = "Mike";
console.log(user);
user.name = "Peter";
console.log(user);
delete user.name;
console.log(user);