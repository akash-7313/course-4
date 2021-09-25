// function
function product(quantityId,increase,totalId,price) {
    // quantity increse , decrease
    var quantity = document.getElementById(quantityId);
    var quantityInput = parseInt(quantity.value);
    if(increase==true){
        quantityInput += 1;
        quantity.value = quantityInput;
    }
    else if (quantityInput > 0) {
        quantityInput -= 1;
        quantity.value = quantityInput;
    }
    // product cost with quantity
    var phnTotalPrice = document.getElementById(totalId);
    phnTotalPrice.innerText = quantityInput * price;
    // total
    total();
}
// sub-total,tax,total
function eachTotal (quantityId) {
    var quantity = document.getElementById(quantityId);
    var quantityInput = parseInt(quantity.value);
    return quantityInput;
}
function total() {
    var phoneTotal = eachTotal('phn-quantity') * 1219;
    var caseTotal = eachTotal('case-quantity') * 59;
    var subTotal = phoneTotal + caseTotal;
    var tax = subTotal / 10;
    var total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('taxes').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// phn quantity increase
document.getElementById('phn-plus').addEventListener('click',function(){
    product('phn-quantity',true,'phn-total',1219);
})
// phn quantity decrease
document.getElementById('phn-minus').addEventListener('click',function(){
    product('phn-quantity',false,'phn-total',1219);
})
// case quantity increase
document.getElementById('case-plus').addEventListener('click',function(){
    product('case-quantity',true,'case-total',59);
})
// case quantity decrease
document.getElementById('case-minus').addEventListener('click',function(){
    product('case-quantity',false,'case-total',59);
})



































