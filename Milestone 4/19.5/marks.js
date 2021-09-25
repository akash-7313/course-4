// var mark = 75;
// if ( mark >= 80 && mark <=100) {
//     console.log('A+');
// }
// else if ( mark >= 70 && mark <= 79) {
//     console.log('A')
// }
// else if ( mark >= 60 && mark <= 69) {
//     console.log('A-')
// }
// else if ( mark >= 50 && mark <= 59) {
//     console.log('B')
// }
// else if ( mark >= 40 && mark <= 49) {
//     console.log('C')
// }
// else if ( mark >= 33 && mark <= 39) {
//     console.log('D')
// }
// else {
//     console.log ('fail')
// }


function sayMark (number) {
    if ( number >= 80 && number <=100) {
        return('A+');
    }
    else if ( number >= 70 && number <= 79) {
        return('A');
    }
    else if ( number >= 60 && number <= 69) {
        return('A-');
    }
    else if ( number >= 50 && number <= 59) {
        return('B');
    }
    else if ( number >= 40 && number <= 49) {
        return('C');
    }
    else if ( number >= 33 && number <= 39) {
        return('D');
    }
    else {
        return('fail');
    }
}
var result = sayMark(22);
console.log(result);


