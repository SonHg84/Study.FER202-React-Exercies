console.log("Arrow funcion with multiple parameters.");
let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};

greet('Alice', 'morning');
greet('Bod', 'evening');

console.log('----------------');
console.log('Arrow function with single parameter.');
let square = num => {
    return num * num;
};
console.log(square(3));
console.log(square(9))

console.log('----------------');
console.log('Arrow function without any parameters')
let sayHello = () => {
    console.log('Hello there.');
}
