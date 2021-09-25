function number (n)  {
    if (n==1) {
        return 1;
    }
    return number(n-1);
}
var result = number(10);
console.log(result);





