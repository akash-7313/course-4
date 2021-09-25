const add = () => {
    const inputProduct = document.getElementById('product');
    const product = inputProduct.value;
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;
    // display to ui
    displayToUi(product, price);
    // add to local storage
    addToLocalStorage(product, price);

    inputProduct.value = '';
    inputPrice.value = '';
}
const displayToUi = (product, price) => {
    const parentCall = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${product}</span>,
        <span>${price}</span>  
    `
    parentCall.appendChild(li);
}
const getItemFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    let cartArray;
    if (cart) {
        cartArray = JSON.parse(cart);
    }
    else {
        cartArray=[];
    }
    return cartArray;
}

const addToLocalStorage = (product, price) => {
    const cartOfArray = getItemFromLocalStorage();
    const cartObj = {};
    cartObj['name'] = product;
    cartObj['quantity'] = 1;
    cartObj['price'] = price;
    cartOfArray.push(cartObj);

    const cartStringified = JSON.stringify(cartOfArray);
    localStorage.setItem('cart', cartStringified);
}

const displayFromLocalStorage = product => {
    console.log(product)
    const parentCall = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `${product.name}, Quantity: ${product.quantity}, Price: ${product.price}`;
    parentCall.appendChild(li);
}
const showCartFromLocalStorage = () => {
    const cart = getItemFromLocalStorage();
    // console.log('from code', cart);
    for (const product of cart) {
        // console.log('from for loop', product)
        displayFromLocalStorage(product);
    }
}
showCartFromLocalStorage();

const remove = () => {
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart');
}












































