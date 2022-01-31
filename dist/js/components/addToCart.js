import {openModal} from './modal.js';

let amountCart = document.querySelector('.navigation__amount-cart'),
    idCount = 0;

function addToCart() {
    let buttonToCart = document.querySelectorAll('.content__card-tobin'),
        cardsCart = [];

    buttonToCart.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.querySelector('.content__card-img-img').src,
                title = item.parentElement.querySelector('.content__card-title').textContent,
                color = item.parentElement.querySelector('.content__card-color').style.backgroundColor,
                price = item.parentElement.querySelector('.content__card-price').textContent;

            let toCart = {
                id: `${idCount++}`,
                title: `${title}`,
                img: `${img}`,
                color: `${color}`,
                price: `${price}`
            }
            if (localStorage.getItem('CartCards')) {
                cardsCart = JSON.parse(localStorage.getItem('CartCards'));
            }
            cardsCart.push(toCart);
            localStorage.setItem('CartCards', JSON.stringify(cardsCart));
            showAmountBin();
        });
    });
};

function showAmountBin() {
    amountCart.textContent = JSON.parse(localStorage.getItem('CartCards'))?.length;
    openModal('.navigation__amount-cart');
};
showAmountBin();

export {addToCart, showAmountBin};