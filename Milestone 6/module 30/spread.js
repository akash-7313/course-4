const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(23, 99, 65, 21, 34);
// no answer or NaN----
// const maxInArray1 = Math.max(numbers);
// const maxInArray2 = Math.max(...numbers);
// console.log(max, maxInArray1,maxInArray2);


const numbers2 = numbers;
// copy array
const numbers3 = [...numbers]; 
const numbers4 = [...numbers, 88];
const numbers5 = [21, ...numbers, 88];
numbers.push(55);

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5);