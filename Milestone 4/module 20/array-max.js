// max number in array

// function arrayMax (arr) {
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         var element = arr[i];
//         if (element >= max) {
//             max = element;
//         }
//     }
//     return max;
// }
// // var price = [21, 1215, 9, 3, 155, 85, 98];
// var price = [-21, -15, -19, -13, -15, -17, -18];
// var result = arrayMax(price);
// console.log('the max value is:', result)



// min number in array

function arrayMin (number) {
    var min = number[0];
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
var price = [21, 15, 19, 13, 155, 85, 98];
var result = arrayMin(price);
console.log('the min value is:', result)












