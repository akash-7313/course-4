const add = () => {
    const inputField = document.getElementById('products');
    const product = inputField.value;
    if (product === '') {
        // alert('Plz add a product');
        return;
    }
    // display in ui
    displayInUi(product);
    // add to local storage
    addToLocalStorage(product);

    inputField.value = '';
}
const displayInUi = product => {
    const parentCall = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = product;
    parentCall.appendChild(li);
}
const getItemFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addToLocalStorage = product => {
    const cart = getItemFromLocalStorage();
    if (cart[product]) {
        cart[product] += 1;
    }
    else {
        cart[product] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const showItemFromLocalStorage = () => {
    const getCart = getItemFromLocalStorage();
    for (product in getCart) {
        displayInUi(product);
    }
}
showItemFromLocalStorage();

const remove = () => {
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart');
}






















