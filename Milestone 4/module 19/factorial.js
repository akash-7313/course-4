// var factorial = 1;
// for (var i =1; i <= 4; i++) {
//     factorial = factorial * i;
// }
// console.log (factorial);



// var factorial = 1;
// var i =1;
// while ( i <= 5) {
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);



// function getfactorial (number) {
//     var factorial = 1;
//     for( var i=1; i <= number; i++ ) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var myfactorial = 5;
// var fact = getfactorial(myfactorial);
// console.log('i got value for my factorial is:', fact);



// function getfactorial(number) {
//     var i=1;
//     var factorial = 1;
//     while ( i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var fact = getfactorial(3)
// console.log('my factorial is:', fact );


// decreasing while loop
// function getfactorial(number) {
//     var i=number;
//     var factorial = 1;
//     while ( i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// var fact = getfactorial(6)
// console.log('my factorial is:', fact);


// decreasing for loop
function getfactorial(number) {
    var factorial = 1;
    for ( var i=number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
var fact = getfactorial(6)
console.log('my factorial is:', fact);