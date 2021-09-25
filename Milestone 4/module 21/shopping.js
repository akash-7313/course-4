
// function totalCost (shirtQuantity, watchQuantity, lungiQuantity) {
// i=0; i<products.length; i++
//  var product = products[i];

    /* var total = 0;
    for (var product of products) {
        var productTotal = product.price * product.quantity;
        var total = total + productTotal; */

        // var costOfShirt = product[0].price * shirtQuantity;
        // var costOfWatch = product[1].price * watchQuantity;
        // var costOfLungi = product[2].price * lungiQuantity;
        // var costOfAllProduct = costOfShirt + costOfWatch + costOfLungi;
    // }
    /* return total; */
    // return costOfAllProduct;
// }
/* var products = [
    {name: 'shirt', price: 400, quantity: 6},
    {name: 'watch', price: 800, quantity: 3},
    {name: 'lungi', price: 300, quantity: 2}
] */

// var products = [
//     {name: 'shirt', price: 400},
//     {name: 'watch', price: 800},
//     {name: 'lungi', price: 300}
// ]

// var cost = totalCost(4, 3, 2);
// console.log(cost);









function totalCost () {
    var total = 0;
    for (var oneProduct of products) {
        var oneProductCost = oneProduct.price * oneProduct.quantity;
        total = total + oneProductCost;
    }
    return total;
}
var products = [
    {name: 'shirt', price: 400, quantity: 6},
    {name: 'watch', price: 800, quantity: 3},
    {name: 'lungi', price: 300, quantity: 8}
]
var allProductsCost = totalCost ();
console.log(allProductsCost);










