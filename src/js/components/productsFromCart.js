import {discount} from './getDiscount.js';

function productsFromCart() {
    let products = JSON.parse(localStorage.getItem('BinCards'));
    let productsBlock = document.querySelector('.content__trash-wrap');
    let amountProduct = document.querySelector('.content__trash-order-title-amount');
    let productSum = document.querySelector('.content__trash-order-price');
    let totalPrice = document.querySelector('.content__trash-order-all-sum');
    let summer = [];
    let sum = 0;

    
    products.forEach(item => {
        productsBlock.innerHTML += `
            <div class="content__trash-item">
            <div class="content__trash-item-img">
                <img src="${item.img}" alt="card">
            </div>
            <div class="content__trash-item-title">${item.title}</div>
            <div class="content__trash-item-price">${item.price}</div>
            <button class="content__trash-item-icon" type="button">
                <img src="icons/trash.svg" alt="trash">
            </button>
        `;
        summer.push(item.price.match(/\d+/g));
    })    
    summer.forEach(item => {
        sum += +item[0];
    })
    productSum.innerHTML = `${sum} ₽`;
    amountProduct.textContent = `${products.length} шт`;
    let totalSum = sum - discount;
    totalPrice.innerHTML = `${totalSum} ₽`;
    getBonus(totalSum);
}

function getBonus(totalSum) {
    let bonus = Math.floor(((totalSum * 5) / 100));
    document.querySelector('.content__trash-order-bonus-sum').innerHTML = `${bonus} бонуса`
}

productsFromCart();

export {productsFromCart};