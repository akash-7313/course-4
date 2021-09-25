// var year = 2021;
// if ( year % 400 == 0) {
//     console.log('leap year')
// }
// else if ( year % 100 == 0) {
//     console.log('not leap year')
// }
// else if ( year % 4 == 0) {
//     console.log('leap year')
// }
// else {
//     console.log('not leap year')
// }

function sayLeapYearOrNot (year) {
    if (year % 400 ==0) {
        return true;
    }
    else if ( year % 100 == 0) {
        return false;
    }
    else if ( year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var leapYear = sayLeapYearOrNot (2024);
console.log(leapYear);