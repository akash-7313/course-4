// one list
document.getElementById('thi-li').addEventListener('click', function(event) {
    console.log('third 1 li clicked');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('thi-li').addEventListener('click', function(event) {
    console.log('third 2 li clicked');
})
document.getElementById('thi-li').addEventListener('click', function(event) {
    console.log('third 3 li clicked');
})

// full ul
document.getElementById('li-container').addEventListener('click', function() {
    console.log('ul clicked');
})

// div 
document.getElementById('container').addEventListener('click', function() {
    console.log('div clicked');
})















