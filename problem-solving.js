// problem:1
/*
const oddArry = [1, 3, 5, 7, 9];

//for loop
let newArry = [];
for (const odd of oddArry) {
    const even = odd + 1;
    
    newArry.push(even);

}
console.log(newArry);

const evenArry = oddArry.map(x => x + 1);
console.log(evenArry);

*/

// problem -2

/*

const givenArry = [33, 50, 79, 78, 90, 101, 30];

const divisableBy10 = givenArry.filter(n => n % 10 ==0 );
console.log(divisableBy10);
*/

// problem -3

/*
const givenArry = [33, 50, 79, 78, 90, 101, 30];

const divisableBy10 = givenArry.find(n => n % 10 == 0);
console.log(divisableBy10);
*/


/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output.Do this using for loop &
    array.reduce() method. 
*/

/*
const givenArry = [1, 9, 17, 22];
let sum = 0;
for (const element of givenArry) {  
    sum = element + sum;
}
console.log(sum);

const givenArry = [1, 9, 17, 22];

const sum = givenArry.reduce((x, y) => x + y, 0);

console.log(sum);
*/

//
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Sucorita', age: 22 }
]
let sum = 0;

for (const element of people) {
    
    const ageList = element.age;

    sum = ageList + sum;
}
// console.log(sum);

/* Challenging Follow above array of objects. So, you have 3 objects as
array element.Can you find out the total sum from here ?

    20 + 15 + 22 = 57.The output will be 57

What are you thinking ? Yeah! Do it with for loop.I know you can do it.
    But! Wait!! Wait!!! Do the same task using array.reduce() method.
    */

    /*
const summation = people.reduce((x, y) => x + y.age , 0);
*/

const student = {
    name: 'freie',
    age : 26
}

const age  = student.age;
// console.log(age)



// Console the value of city
let data = {
    loacation: [
        {
            latitute: '34.5 , 37.8',
            logitute: '98.77 , 58.7',
            city: 'hydrabd',
            country: 'india'
        }
    ]
};

const city = data.loacation[0].city
// console.log(city);

const user ={
    id: 1,
        name: "Leanne Graham",
            username: "Bret",
                email: "Sincere@april.biz",
                    address: {
        street: "Kulas Light",
            suite: "Apt. 556",
                city: "Gwenborough",
                    zipcode: "92998-3874",
                        geo: {
            lat: "-37.3159",
                lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
            company: {
        name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
    }
}
//Console the value of email

const email = user.email;
console.log(email);
//Console the value of address
const address = user.address;
console.log(address);
//Console the value of city
const City = user.address.city;
console.log(City);
//Console the value of lat
const lat = user.address.geo.lat;
console.log(lat);

//Console the value of company
const companyName = user.company.name;
console.log(companyName);









