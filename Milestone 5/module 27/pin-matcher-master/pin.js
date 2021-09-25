// generate pin
function generatePin() {
    var pin = Math.round(Math.random() * 10000);
    var string = pin + '';
    if(string.length==4){
        document.getElementById('show-pin').value = pin;
    }
    else {
        return generatePin();
    }
}
// type pin in calculator
function typePin(event) {
    // debugger;
    var input = event.target.innerText;
    console.log(input)
    var number = document.getElementById('show-number');
    if (isNaN(input)) {
        if(input == 'C'){
            number.value='';
        }
    }
    else{
        // number.value = input;  single number & new numbwe replace it
        var previousNumber = number.value;
        var newNumber = previousNumber + input;
        number.value = newNumber;
    }
}
// check matching
document.getElementById('check').addEventListener('click',function(){
    var generatePin = document.getElementById('show-pin');
    var number = document.getElementById('show-number');
    var match = document.getElementById('match');
    var notMatch = document.getElementById('not-match');

    if(generatePin.value==number.value){
        match.style.display='block';
        notMatch.style.display='none';
    }
    else {
        notMatch.style.display='block';
        match.style.display='none';
    }
})
























