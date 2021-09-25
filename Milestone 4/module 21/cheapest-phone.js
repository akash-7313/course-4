var phones = [
    {name: 'iphone', price: 80000, camera: 8, storage: 16},
    {name: 'oppo', price: 12000, camera: 8, storage: 16},
    {name: 'vivo', price: 11000, camera: 8, storage: 16},
    {name: 'htc', price: 25000, camera: 8, storage: 16},
    {name: 'nokia', price: 7000, camera: 8, storage: 16},
    {name: 'walton', price: 17000, camera: 8, storage: 16}
]
var cheapestPhone = phones[0];
for (var phone of phones) {
    if (cheapestPhone.price > phone.price) {
        cheapestPhone = phone;
    }
}
console.log(cheapestPhone);




























