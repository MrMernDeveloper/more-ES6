const numbers = [12, 56, 87, 44];
const half = numbers.map(x => x / 2);
console.log(half);

const friends = ['tom hanks', 'tom cruise', 'tom Brandy', 'tom solaiman'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

const nameLength = friends.map(friends => friends.length);
console.log(nameLength);

const products = [
    {id:1 , name: 'laptop', price: 450000},
    {id:2, name: 'mobile', price: 500000},
    {id:3 , name: 'mzcbook', price: 750000},
    {id:4, name: 'tablet', price: 50000}
]

// const items = proucts.map(product => console.log(product));
const productName = products.map(x => x.name);
console.log(productName);
const productPrice = products.map(x => x.price);
console.log(productPrice);



//for each return kore na
products.forEach(product => console.log(product));

