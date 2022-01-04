import {productsFromCart} from './productsFromCart.js';

function deleteCard() {
    let deleteBtn = document.querySelectorAll('.content__trash-item-icon');
    let productFromCart = JSON.parse(localStorage.getItem('BinCards'));

    deleteBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            productFromCart.splice(`${index}`, 1);
            localStorage.setItem('BinCards', JSON.stringify(productFromCart));
            document.querySelector('.content__trash-wrap').innerHTML = '';
            productsFromCart();
        })
    })
}

deleteCard();