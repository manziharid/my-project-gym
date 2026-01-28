let names = [];

for (let i = 1; i <= 5; i++) {
    let name = prompt("Enter name " + i + ":");
    names.push(name);
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
