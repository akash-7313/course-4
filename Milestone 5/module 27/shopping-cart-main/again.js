// function 
function product (quantityId,increase,totalId,price) {
    var quantityInput = document.getElementById(quantityId);
    var quantity = parseInt(quantityInput.value);
    if(increase==true){
        quantity += 1;
        quantityInput.value = quantity;
    }
    else if(quantity>0) {
        quantity -= 1;
        quantityInput.value = quantity;
    }
    var oneProductPrice = document.getElementById(totalId);
    oneProductPrice.innerText = quantity * price;
    // total
    calculateTotal();
}
// sub total ,tax , total
function eachTotal(quantityId){
    var quantityInput = document.getElementById(quantityId);
    var quantity = parseInt(quantityInput.value);
    return quantity;
}
function calculateTotal(){
    var phnTotal = eachTotal('phn-quantity') * 1219;
    var caseTotal = eachTotal('case-quantity') * 59;
    var subTotal = phnTotal + caseTotal;
    var tax = subTotal / 10;
    var total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('taxes').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// phn
document.getElementById('phn-plus').addEventListener('click',function(){
    product('phn-quantity',true,'phn-total',1219)
})
document.getElementById('phn-minus').addEventListener('click',function(){
    product('phn-quantity',false,'phn-total',1219)
})
// case
document.getElementById('case-plus').addEventListener('click',function(){
    product('case-quantity',true,'case-total',59)
})
document.getElementById('case-minus').addEventListener('click',function(){
    product('case-quantity',false,'case-total',59)
})






















































