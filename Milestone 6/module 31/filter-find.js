const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);
const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem);



// map, forEach, filter, find run a loop
// map, forEach, filter, find structure almost same

// filter, find requires condition 
// filter gives a array which fullfill the condition
// find gives the first element {object hisebe return kore} which fullfill the condition

// map, forEach requires no condition
// map return a array
// forEach give no return but you can console.log the result