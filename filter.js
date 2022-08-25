const numbers = [12, 4, 23, 11, 18, 55, 61, 1];
const bigNumber = numbers.filter(number => number > 20);
console.log(bigNumber);

const tiny = numbers.filter(n => n < 10);
console.log(tiny);

const even = numbers.filter(x => x % 2 == 0);
console.log(even);

const products = [
    { id: 1 , name: 'laptop', price:457000},
    { id: 1 , name: 'laptopi', price:459000},
    { id: 1 , name: 'laptopu', price:459000},
    { id: 1 , name: 'laptopy', price:450000},
]

const expense = products.filter(x => x.price > 450000);
console.log(expense);