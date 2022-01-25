import {discount} from './getDiscount.js';

function productsFromCart() {
    let products = JSON.parse(localStorage.getItem('CartCards')),
        productsBlock = document.querySelector('.content__cart-wrap'),
        amountProduct = document.querySelector('.content__cart-order-title-amount'),
        productSum = document.querySelector('.content__cart-order-price'),
        totalPrice = document.querySelector('.content__cart-order-all-sum'),
        summer = [],
        sum = 0;

    
    products.forEach(item => {
        productsBlock.innerHTML += `
            <div class="content__cart-item">
            <div class="content__cart-item-img">
                <img src="${item.img}" alt="card">
            </div>
            <div class="content__cart-item-title">${item.title}</div>
            <div class="content__cart-item-price">${item.price}</div>
            <button class="content__cart-item-icon" type="button">
                <img src="icons/trash.svg" alt="trash">
            </button>
        `;
        summer.push(item.price.match(/\d+/g));
    }) ;

    summer.forEach(item => {
        sum += +item[0];
    });

    productSum.innerHTML = `${sum} ₽`;
    amountProduct.textContent = `${products.length} шт`;
    let totalSum = sum - discount;
    totalPrice.innerHTML = `${totalSum} ₽`;
    getBonus(totalSum);
}

function getBonus(totalSum) {
    let bonus = Math.floor(((totalSum * 5) / 100));
    document.querySelector('.content__cart-order-bonus-sum').innerHTML = bonus;
}
productsFromCart();

export {productsFromCart};