// Map, foreach,filter,find, reduce 
const numbers = [1, 2, 3, 4, 5];

const totalNumbers = numbers.reduce((x, y) => x + y, 0);
console.log(totalNumbers);

// 
const total = numbers.reduce((x, y) => { 

    console.log(x, y);
    return x + y;
}, 0);
console.log(total);


//




