// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// var sum = 0;
// for (var i = 10; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum);


function sum (n) {
    if (n==1) {
        return 1;
    }
    return n + sum(n-1);
}
var add = sum (10);
console.log(add);



















