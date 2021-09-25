
function duplicateArray (names) {
    var unique = [];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
var name = ['akash', 'kaiser', 'mamun', 'shanto', 'akash', 'shanto', 'yasin', 'noyon', 'kaiser', 'fahim', 'mamun', 'akash', 'riaz', 'yasin']
var cutDuplicate = duplicateArray(name);
console.log(cutDuplicate);



function arrayDuplicate (prices) {
    var unique = [];
    for (var element of prices) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
var price = [8, 13, 17, 12, 8, 9, 12, 25, 26, 17, 13, 23, 25, 29, 39, 45, 48, 29, 45, 12]
var deleteDuplicate = arrayDuplicate(price);
console.log(deleteDuplicate);


























