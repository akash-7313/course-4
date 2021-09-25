function isLeapYear (year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var myYear = 2010;
var isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year a leap year:', isMyYearLeapYear);