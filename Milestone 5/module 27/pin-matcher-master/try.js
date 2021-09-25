// get pin
document.getElementById('generate-pin').addEventListener('click', function getPin(){
    var pin = Math.round(Math.random()*10000);
    var string = pin + '';
    if(string.length==4){
        var showPin = document.getElementById('show-pin');
        showPin.value = pin;
    }
    else{
        return getPin();
    }
})
// type pin in calculator
document.getElementById('type-pin').addEventListener('click',function(){
    var input = event.target.innerText;
    var showInput = document.getElementById('show-number');
    if(isNaN(input)){
        if(input=='C'){
            showInput.value = '';
        }
    }
    else{
        var previousInput = showInput.value;
        var newInput = previousInput + input;
        showInput.value = newInput;
    }
})
// match pin
document.getElementById('check').addEventListener('click',function(){
    var showPin = document.getElementById('show-pin');
    var showInput = document.getElementById('show-number');
    var match = document.getElementById('match')
    var notMatch = document.getElementById('not-match')
    if(showPin.value == showInput.value){
        match.style.display='block';
        notMatch.style.display='none';
    }
    else{
        match.style.display='none';
        notMatch.style.display='block';
    }
})





































