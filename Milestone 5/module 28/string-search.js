const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'dell purple color phone with Laptop'
];

const searching1 = 'dell';
const searching2 = 'laptop';
const searching3 = 'iphone';

// indexOf
var output =[];
for (var product of products){
    if (product.toLocaleUpperCase().indexOf(searching2.toUpperCase())!=-1){
        output.push(product);
    }
}
// console.log(output);
// const output = [];
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching1.toLowerCase()) != -1) {
//           output.push(product);
//     }
// }
// console.log(output);

// includes
var output =[];
for (var product of products){
    if (product.toLocaleUpperCase().includes(searching1.toUpperCase())){
        output.push(product);
    }
}
// console.log(output);
// for (const product of products) {
//     if (product.toLowerCase().includes(searching2.toLowerCase())) {
//    output.push(product);
//     }
// }
// console.log(output);

//starts with
var output =[];
for (var product of products){
    if (product.toLocaleUpperCase().startsWith(searching3.toUpperCase())){
        output.push(product);
    }
}
console.log(output);
// for (const product of products) {
//     if (product.toLowerCase().startsWith(searching1.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output)