function search (product, searchText) {
    var matched = [];
    for (var element of product) {
        var name = element.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(element);
        }
    }
    return matched;
}
var products = [
    {name: 'lenovo laptop', price: 80000},
    {name: 'del laptop', price: 80000},
    {name: 'watch', price: 12000},
    {name: 'samsung phone', price: 11000},
    {name: 'htc phone', price: 25000},
    {name: 'nokia phone', price: 7000},
    {name: 'walton tv', price: 17000}
]
var result = search (products, 'phone');
console.log(result);












