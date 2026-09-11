function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1,4,5));
console.log(sum(1, 2, 4, 6, 8));