const numbers = [2, 8, 4, 6, 3];


// console.log(output);

function getdouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
    
}
//format -1
const doubleIt = num => num * 2;

const doubled = numbers.map(doubleIt) //  this is called map

//format-2
const againdouble = numbers.map(x => x * 2);
console.log(againdouble)


function doubleItOld(num) {
    return num *2
}

// 





// console.log(getdouble(numbers));