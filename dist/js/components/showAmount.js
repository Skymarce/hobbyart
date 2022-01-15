import {openModal} from './modal.js';

function showAmount(count) {
    let container = document.querySelector('.navigation__amount-orders');

    openModal('.navigation__amount-orders');
    container.textContent = JSON.parse(localStorage.getItem(count))?.length;
}
showAmount('BinCards');