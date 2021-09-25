const addItem = () => {
    const product = document.getElementById('product-name');
    const productName = product.value;
    if (!productName) {
        return;
    }
    // display product in ui
    displayProducts(productName)

    // add to local storage
    addToLocalStorage(productName);

    // clear
    product.value = '';
}
const displayProducts = product => {
    const parentCall = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = product;
    parentCall.appendChild(li);
}

const getProduct = () => {
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
    const cart = getProduct();
    if (cart[product]) {
        cart[product] = cart[product] + 1;
    }
    else {
        cart[product] = 1;
    }
    console.log(cart);
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}

const displayLocalStorageCart = () => {
    const cart = getProduct();
    for (const product in cart) {
        displayProducts(product);
    }
}
displayLocalStorageCart();



const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

























