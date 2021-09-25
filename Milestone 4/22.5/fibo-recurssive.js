function fibo (n) {
    if (n==0) {
        return 0;
       /*  return [0]; */
    }
    if (n==1) {
        return 1;
        /* return [0,1]; */
    }
   /*  var fibonacci = [] */
    return fibo(n-1) + fibo(n-2);
    // 0 1 1 2 3 5 8 13 21 34 55 89
}
var result = fibo(9);
console.log(result);











