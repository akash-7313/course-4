// var factorial = 1;
// for (var i = 5; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial);


function factorial (n) {
    if (n==1) {
        return 1;
    }
    return n * factorial(n-1);
}
var result = factorial(3);
console.log(result);




















