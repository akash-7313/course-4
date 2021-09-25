function number (money) {
    console.log('price of mango', money);
    console.log('mama mango den');
    var oneMangoPrice = 50;
    var mangoQuantity = money / oneMangoPrice;
    return(mangoQuantity);
}
var taka = 150;
var boughtMango = number (taka);
console.log('vai ei neo tumar am', boughtMango); 