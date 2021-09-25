const add = () => {
    const inputOne = document.getElementById('product');
    const valueOne = inputOne.value;
    inputOne.value = '';
    const inputTwo = document.getElementById('price');
    const valueTwo = inputTwo.value;
    inputTwo.value = '';
    if (!valueOne && !valueTwo) {
        return;
    }
    // display in brower
    displayInBrower(valueOne, valueTwo);
    // add to local storage
    storeDataInLocalStorage(valueOne, 'productPrice', valueTwo);
}
const displayInBrower = (product, price) => {
    const parentCall = document.getElementById('products-container');
    const li = document.createElement('li');
    li.innerHTML = `
        <p><span> ${product} </span>, 
        <span> ${price} </span></p>
    `
    parentCall.appendChild(li);
}

const getItem = () => {
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
const storeDataInLocalStorage = (name, productPrice, price) => {
    const cartItem = getItem();
    // const product = [];
    cartItem[name] = 1;
    cartItem[productPrice] = price;
    console.log(cartItem);
    const cartStringified = JSON.stringify(cartItem);
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified);
}

const displayDataFromLocalStorage = () => {
    const products = getItem();
    for (const product in products) {
        displayInBrower(product);
    }
}






























