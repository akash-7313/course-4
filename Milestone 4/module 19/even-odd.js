// var number = 10;
// var remainder = number % 2;
// console.log( remainder == 0 );
// console.log( number % 2 == 0 );

// even number check
// function even (isEven) {
//     if(isEven % 2 == 0){
//         return true;
//     }
//     return false;
// }
// var mynumber = 5;
// var isEvenNumber = even (mynumber);
// console.log('is my number even: ', isEvenNumber);

// odd number check
function odd (isOdd) {
    if( isOdd % 2 == 0) {
        return false;
    }
    return true;
}
var myNumber = 9;
var isOddNumber = odd (myNumber);
console.log('is my number odd: ', isOddNumber);


function odd (isOdd) {
    if( isOdd % 2 != 0) {
        return true;
    }
    return false;
}
var myNumber = 5;
var isOddNumber = odd (myNumber);
console.log('is my number odd: ', isOddNumber);