import {getData} from '../services/getData.js';
import {config} from '../environments/environments.js';
import {openModal} from './modal.js';

getData(`${config.fbUrl}order.json`).then(orders => showAmountOrders(orders));

function showAmountOrders(orders) {
    let amountOrders = document.querySelector('.navigation__amount-orders');

    openModal('.navigation__amount-orders');
    amountOrders.textContent = Object.keys(orders)?.length;
};