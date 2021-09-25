// function mango (tk) {
//     var quantity = tk / 30;
//     return quantity;
// }
// var result = mango(150);
// console.log(result);


// function add (n1,n2) {
//     var addition = n1 + n2;
//     return addition;
// }
// var result = add(5,4);
// console.log(result);

// function sub (n1,n2) {
//     var substarction = n1 - n2;
//     return substarction;
// }
// var result = sub(5,4);
// console.log(result);

// function mul (n1,n2) {
//     var multiplication = n1 * n2;
//     return multiplication;
// }
// var result = mul(5,4);
// console.log(result);

// function div (n1,n2) {
//     var division = n1 / n2;
//     return division;
// }
// var result = div(12,4);
// console.log(result);



// object property
var info = {
    name: 'akash',
    age: 23,
    occupation: 'student'
}
var computer = {
    ram: '4gb',
    color: 'black',
    hardDisk: '500gb',
    price: 23000
}

// console.log(computer.price);

computer.price = 17000;
computer['price'] = 16000;
// console.log(computer);


var price = [20, 15, 5, 9, 12, 25];

// if ( price.indexOf(20) != -1) {
// console.log('available');
// }
// else {
//     console.log('not available');
// }

// break-continue 
// var i =0;
// while (i <=10) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
//     i++;
// }

// for (var i=0; i <=10; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }


// var prices = [20, 15, 5, 9, 12, 25, 56, 67, 85, 95, 98];
// for(var i=0; i < prices.length; i++) {
//     var price = prices[i];
//     console.log(price);
//     if ( i > 4 ) {
//         break;
//     }
// }


// var prices = [20, 15, 5, 9, 12, 25, 56, 67, 85, 95, 98];
// for (var i=0; i < prices.length; i++) {
//     var price = prices[i];
//     console.log(price);
//     if ( price > 25 ) {
//         break;
//     }
// }


// var prices = [20, 15, 5, 9, 12, 25, 56, 67, 85, 95, 8, 98];
// for (var i=0; i < prices.length; i++) {
//     var price = prices[i];
//     if ( price > 25 ) {
//         continue;
//     }
//     console.log(price);
// }


// function  evenOrOdd (number) {
//     if (number % 2 == 0) {
//         return ('even');
//     }
//     else {
//         return ('odd');
//     }
// }
// var input = 100;
// console.log(input)
// var result = evenOrOdd(input);
// console.log(result);


// var year = 2100;
// if (year % 400 == 0) {
//     console.log('leap year');
// }
// else if (year % 100 == 0) {
//     console.log('not leap year');
// }
// else if (year % 4 == 0) {
//     console.log('leap year');
// }
// else {
//     console.log('not leap year');
// }

// function isALeapYear (year) {
//     if (year % 400 == 0) {
//         return('leap year');
//     }
//     else if (year % 100 == 0) {
//         return('not leap year');
//     }
//     else if (year % 4 == 0) {
//         return('leap year');
//     }
//     else {
//         return('not leap year');
//     }
// }
// var myYear = 2023;
// var result = isALeapYear(myYear);
// console.log(result);


// function getFactorial(number) {
//     var factorial = 1;
//     for (var i=1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial ;
// }
// var input = 5;
// var result = getFactorial(input);
// console.log(result);


// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial ;
// }
// var input = 6;
// var result = getFactorial(input);
// console.log(result);


// function inches (inch) {
//     var feet = inch / 12;
//     return feet;
// }
// var result = inches(24);
// console.log(result);














