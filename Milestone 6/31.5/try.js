// 1
const me = 'Akash';
let sum =0;
for (let i=0; i<=10; i++){
    sum = sum + i;
}
// console.log(sum);

// 2
const age = 23;
const school = {
    name: 'A. N. M. High School',
    studentQuantity: 950,
    address: 'Khamarer Char',
    established: 1969
}

const info = `
    My name is ${me}.I am ${age} years old.I read in ${school.name}.Our school situated in ${school.address}.
`
// console.log(info);


// 3.1
const division = number => number / 5;
// console.log(division(15));

// 3.2
const multiple = (num1,num2) => ((num1+2) * (num2+2));
// console.log(multiple(2,3));

// 3.3
const mul = (num1,num2,num3) => num1 * num2 * num3;
// console.log(mul(2,3,4));

// 3.4
const multiplication = (num1,num2) => {
    num1 = num1 + 2;
    num2 = num2 + 2;
    const mul = num1 * num2;
    return mul;
} 
// console.log(multiplication(2,3));

// 4 search on google

// 5
const numbers = [1,3,5,7,9];
const multiply = numbers.map(number => number * 5);
// console.log(multiply);

// 6
const nums = [1,2,3,4,5,6,7,8,9,10];
const odd = nums.filter(num => num % 2 != 0);
const even = nums.filter(num => num % 2 == 0);
// console.log(odd,even);

// 7
const products = [
    {name: 'phone', price:7000},
    {name: 'watch', price:600},
    {name: 'computer', price:18000},
    {name: 'eye glass', price:800},
    {name: 'books', price:6000},
    {name: 'khata', price:20}
]
const search = products.find(product => product.price > 5000);
const search2 = products.filter(product => product.price < 5000);
// console.log(search);
// console.log(search2);

// 8.1
const company = {
    name: 'Web bees',
    ceo: {
        name: 'Batash',
        phone: '01567946579'
    },
    services: {
        tech: 'IT',
        dev: {
            full: {
                front: 'Front end',
                back: 'Back end',
                fullStack: 'full stack'
            },
            mern: 'Mern stack'
        }
    }
}
const {name} = company;
// console.log('comany name:', name);
const mernStack = company.services.dev.mern;
const {mern} = company.services.dev;
// console.log('first-direct',mernStack,'second-destructure', mern);
const {front,back} = company.services.dev.full;
// console.log(front,back);

// 8.2
const ami = {sky:'blue', soil:'mati', color:'red', money:10};
const {sky,color,soil}=ami;
// console.log(sky,color,soil);

// 9
const friends = ['masud','shanto','kaiser','mamun','noyon','rabbi','rajon','fahim','easin']
const [a,b,three] = friends;
// console.log(a,b,three);

// 10
function add (num1,num2,num3=7) {
    const sum = num1 + num2 + num3;
    return sum;
}
// console.log(add(2,3));

// 11
// const {phone} = company.ceo.filter(ceo => ceo.phone);
// console.log(phone);

// 12
// const {fullStack} = company?.services?.it?.dev.full;
// console.log(fullStack);
console.log(company?.services?.it?.dev.full);


























