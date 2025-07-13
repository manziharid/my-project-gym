let employee = {
  name: {
    firstName: "John",
    lastName: "Doe"
  },
  age: 30
};

// Nested destructuring
let {
  name: {
    firstName,
    lastName
  }
} = employee;

console.log(firstName); // John
console.log(lastName);  // Doe
