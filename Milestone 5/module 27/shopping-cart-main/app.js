// function case plus-minus
function productCount (getId,increase,productTotal,price){
    var input = document.getElementById(getId);
    var inputText = input.value;
    var inputNumber = parseInt(inputText);
    if(increase==true){
        var quantity = inputNumber + 1;
        input.value = quantity;
        // input.value = inputNumber + 1;
    }
    else if(inputNumber > 0) {
        var quantity = inputNumber - 1;
        input.value = quantity;
        // input.value = inputNumber - 1;
    }
    // get case total
    var productTotalPrice = document.getElementById(productTotal);
    productTotalPrice.innerText = input.value * price;
    // sub-total, tax, total
    calculateTotal ();
}
// sub-total, tax, total
function getInputValue(getId){
    var quantity = document.getElementById(getId);
    var quantityInput = parseInt(quantity.value);
    return quantityInput;
}
function calculateTotal () {
    var phoneTotal = getInputValue('phn-quantity') * 1219;
    var caseTotal = getInputValue('case-quantity') * 59;
    var subTotal = phoneTotal + caseTotal;
    var tax = subTotal / 10;
    var totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal; 
    document.getElementById('taxes').innerText = tax; 
    document.getElementById('total-price').innerText = totalPrice; 
}


// phone plus
document.getElementById('phn-plus').addEventListener('click',function(){
    productCount('phn-quantity',true,'phn-total',1219)
})
// phone minus
document.getElementById('phn-minus').addEventListener('click',function(){
    productCount('phn-quantity',false,'phn-total',1219)
})

// case plus
document.getElementById('case-plus').addEventListener('click',function(){
    productCount('case-quantity',true,'case-total',59);
})
// case minus
document.getElementById('case-minus').addEventListener('click',function(){
    productCount('case-quantity',false,'case-total',59);
})


// case minus-plus
// var caseInput = document.getElementById('case-quantity');
    // var caseNumberText = caseInput.value;
    // var caseNumber = parseInt(caseNumberText);
    // var decreaseQuantity = caseNumber - 1;
    // caseInput.value = decreaseQuantity;

// remove item
function remove (removeId){
    var removeItem = document.getElementById(removeId);
    removeItem.style.display="none";
}
document.getElementById('remove-case').addEventListener('click',function() {
    remove('remove-caseitem');
})
document.getElementById('remove-phn').addEventListener('click',function() {
    remove('remove-phnitem');
})





































