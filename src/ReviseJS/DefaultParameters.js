function greet(name='Guest') {
    console.log(`Hello, ${name}`);
}

greet();
greet("sonhv84");

function createFullName(firstName, lastName="Doe") {
    console.log(`${firstName} ${lastName}`);
}
createFullName("Hoang");
createFullName("Hoang", "Son");