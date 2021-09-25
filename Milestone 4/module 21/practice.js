// delete duplicate

function duplicate (name) {
    var unique = [];
    for (var element of name) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
var names = ['akash', 'kaiser', 'mamun', 'shanto', 'akash', 'shanto', 'yasin', 'noyon', 'kaiser', 'fahim', 'mamun', 'akash', 'riaz', 'yasin'];
var deleteDuplicate = duplicate(names);
// console.log(deleteDuplicate);


// add-multiply

function woodNeed (chairQuantity, tableQuantity, bedQuantity) {
    var woodPerChair = 5;
    var woodPerTable = 10;
    var woodPerBed = 50;
    var totalWoodForChair = woodPerChair * chairQuantity;
    var totalWoodForTable = woodPerTable * tableQuantity;
    var totalWoodForBed = woodPerBed * bedQuantity;
    var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
}
var totalWoodNeeded = woodNeed (4,3,1);
// console.log(totalWoodNeeded);


// 3-5 foo, bar, foobar

function foobar (number) {
    for (i = 1; i <= 30; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // console.log('foobar');
        }
        else if (i % 3 == 0) {
            // console.log('foo');
        }
        else if (i % 3 == 0) {
            console.log('bar');
        }
        else {
            // console.log(i);
        }
    }
    // return (console.log);
}
var result = foobar(30);
// console.log(result);



// string reverse

function stringReverse (input) {
    // console.log(input.length);
    var reverse = '';
    for (var letter of input) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

var name = 'my name is akash'
var reversedString = stringReverse(name);
// console.log(reversedString);



// shopping cart

function totalCost (product) {
    var total = 0;
    for (var oneProduct of product) {
        var productPrice = oneProduct.price * oneProduct.quantity;
        total = total + productPrice;
    }
    return total;
}
var products = [
    {name: 'shirt', price: 400, quantity: 6},
    {name: 'watch', price: 800, quantity: 3},
    {name: 'lungi', price: 300, quantity: 2}
]
var cost = totalCost (products);
// console.log(cost);



// cheapest Phone

var phones = [
    {name: 'iphone', price: 80000, camera: 8, storage: 16},
    {name: 'oppo', price: 12000, camera: 8, storage: 16},
    {name: 'vivo', price: 11000, camera: 8, storage: 16},
    {name: 'htc', price: 25000, camera: 8, storage: 16},
    {name: 'nokia', price: 7000, camera: 8, storage: 16},
    {name: 'walton', price: 17000, camera: 8, storage: 16}
]
var cheap = phones[0];
for (var phone of phones) {
    if (cheap.price > phone.price) {
        cheap = phone;
    }
}
// console.log(cheap);




// animal count

function animalCount (miles) {
    var f10 = 5;
    var s10 = 10;
    var restMiles = 50;
    if (miles <= 10) {
        totalAnimal = miles * f10;
    }
    else if (miles <= 20) {
        var f10Animal = f10 * 10;
        var restMile  = miles - 10;
        var s10Animal = restMile * s10;
        var totalAnimal = f10Animal + s10Animal;
    }
    else if (miles > 20) {
        var f10Animal = f10 * 10;
        var s10Animal = s10 * 10;
        var restMile = miles - 20;
        var restAnimal = restMile * restMiles;
        var totalAnimal = f10Animal + s10Animal + restAnimal;
    }
    return totalAnimal;
}
var seenAnimals = animalCount (25);
// console.log(seenAnimals);



















