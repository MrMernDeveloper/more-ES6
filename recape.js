// var let const
// breakup with var
const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2. default parameters

function calculateSalary(salary, tax, bonus=0) {
    const remaining = salary - (salary * tax);
    const total = remaining + bonus;
    return total;
}

// template string

document.getElementById('your-button').addEventListener('click', function () {
    const section = document.getElementById('your-section');
    let createElement = document.createElement('div');
    


    createElement.innerHTML = `
<div>
<h3> Name:</h3>
<p> Adddress: </p>
<p> Salary: ${calculateSalary(1000, 0, 0)} </p>
<p>Others: ${numbers[2]} </p>
</div>
`
    section.appendChild(createElement);
})

//arrow function

const doubleIt = x => x * 5;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//spread
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 22]

//destructing
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'sakib Al Hasan', salary: 1000000 }

const [a, b, ...r] = [12, 45, 21, 65, 98];

