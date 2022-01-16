import {openModal} from './modal.js';

let amountBin = document.querySelector('.navigation__amount-bin');
let idCount = 0;

function addToCard() {
    let toBin = document.querySelectorAll('.content__card-tobin');
    let cardsBin = [];

    toBin.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.querySelector('.content__card-img-img').src;
            let title = item.parentElement.querySelector('.content__card-title').textContent;
            let color = item.parentElement.querySelector('.content__card-color').style.backgroundColor;
            let price = item.parentElement.querySelector('.content__card-price').textContent;

            let toBinObj = {
                id: `${idCount++}`,
                title: `${title}`,
                img: `${img}`,
                color: `${color}`,
                price: `${price}`
            }
            if (localStorage.getItem('BinCards')) {
                cardsBin = JSON.parse(localStorage.getItem('BinCards'));
            }
            cardsBin.push(toBinObj);
            localStorage.setItem('BinCards', JSON.stringify(cardsBin));
            showAmountBin();
        })
    })
} 

function showAmountBin() {
    amountBin.textContent = JSON.parse(localStorage.getItem('BinCards'))?.length;
    openModal('.navigation__amount-bin');
}
showAmountBin();

export {addToCard, showAmountBin};