// Phan ra lay du lieu tu array or abject;
// Doi voi array
const numbers = [1 ,3, 4, 5, 8];
const [a, b, ...restOfNumber] = numbers;
/*
    a --> 1, 
    b --> 2,
    restOfNumber la cac so con lai
*/
console.log(a);
console.log(b);
console.log(restOfNumber);

// Doi voi object thi duoc ung dung kha nhieu trong qua trinh lay du lieu tu API
const person = {
    name: 'John Doe',
    age: 30,
    city: 'new york'
};

const {name: fullName, age, city} = person;

console.log(fullName);
console.log(age);
console.log(city);