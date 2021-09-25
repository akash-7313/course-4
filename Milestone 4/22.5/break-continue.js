function breakContinue (product) {
    var rich = [];
    for(var element of product) {
        if (element.price > 10000) {
            rich.push(element);
        }
        if (element.price < 10000) {
            break;
        }
    }
    return rich;
}


// function breakContinue (product) {
//     var rich = [];
//     for(var element of product) {
//         if (element.price < 10000) {
//             continue;
//         }
//         if (element.price > 10000) {
//             rich.push(element);
//         }
//     }
//     return rich;
// }
var products = [
    {name: 'lenovo laptop', price: 80000},
    {name: 'del laptop', price: 60000},
    {name: 'watch', price: 2000},
    {name: 'samsung phone', price: 11000},
    {name: 'htc phone', price: 25000},
    {name: 'nokia phone', price: 7000},
    {name: 'walton tv', price: 17000}
]
var result = breakContinue(products);
console.log(result);











