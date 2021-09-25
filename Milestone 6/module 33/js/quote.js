function newQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
function displayQuote(quotes) {
    // console.log(quotes);
    const container = document.getElementById('quote');
    container.innerText = quotes.quote;
}