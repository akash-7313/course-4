// 0 1 1 2 3 5 8 13 21 34 55 89

// 3th = 2th + 1th
// 6th = 5th + 4th
// 9th = 8th + 7th

// nth = (n-1)th + (n-2)th;
// ith = (i-1)th + (i-2)th;
// fibo[i] = fibo[i-1] + fibo[i-2];


var fibo = [0, 1];
for (var i = 2; i < 10; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);


// function fibonacci (number) {
//     if (typeof number != 'number') {
//         return 'input a number';
//     }
//     if (number <= 1) {
//         return 'input a number greater than 1';
//     }
//     var fibo = [0, 1];
//     for (var i=2; i < number; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// var fiboSeries = fibonacci (5);
// console.log(fiboSeries);





















