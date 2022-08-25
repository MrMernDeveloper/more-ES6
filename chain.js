const users = [{
    id: 1, name: 'abul', job: 'doctors'
}];
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'Dabul', job: 'leader' },
    ]
}
// console.log(data.data[0].job);

const user = {
    i: 5001,
    name: 'thomas alva edision',
    address: {
        street: {
            first: '34/a kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postoffice: 'cantonment',
        city :'dhaka'
    }
}

const userFloor = user?.address?.stret?.first; // this is called chaining
console.log(userFloor);