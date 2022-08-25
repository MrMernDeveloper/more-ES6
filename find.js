const numbers = [12, 4, 5,23, 11, 18, 55, 61, 1];
const fives = numbers.find(x => x % 5 == 0);
const allfives = numbers.filter(n => n % 5 == 0);
console.log(allfives);
console.log(fives);

//

const products = [
    { id: 1, name: 'laptop', price: 457000 },
    { id: 1, name: 'laptopi', price: 459000 },
    { id: 1, name: 'laptopu', price: 459000 },
    { id: 1, name: 'laptopy', price: 40000 },
]
const cheap = products.filter(product => product.price < 450000);
console.log(cheap);
