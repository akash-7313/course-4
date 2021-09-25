function addNumbers(num1, num2) {
    // console.log(arguments);
    // console.log(arguments[1]);
    let sum = 0;
    for (const num of arguments) {
        // console.log(num);
        sum = sum + num;
    }
    // arguments.push(45); push,pop nai ekhane
    // const result = num1 + num2;
    return sum;
}
const result = addNumbers(23, 13, 50, 100, 45, 76, 198, 901);
// console.log(result);


function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        // fullName = fullName + ' ' + part;
        fullName = fullName + part + ' ';
    }
    // fullName = firstName + ' ' + lastName;
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);