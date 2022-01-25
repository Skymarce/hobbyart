import {openModal, closeModal, cleanModal} from './modal.js';
import {postData} from '../services/postData.js';

function orderingFromCart() {
    let productPrice = document.querySelector('.content__cart-order-all-sum').textContent,
        productDiscount = document.querySelector('#discount').textContent,
        productBonus = document.querySelector('.content__cart-order-bonus-sum').textContent,
        productTitle = document.querySelectorAll('.content__cart-item-title'),
        productBox = document.querySelector('.order__products-list'),
        inputName = document.querySelector('.order__name'),
        inputTel = document.querySelector('.order__phone'),
        productsFromOrder = JSON.parse(localStorage.getItem('CartCards'));

    
    document.querySelector('.content__cart-order-btn').addEventListener('click', () => {
        if (productsFromOrder.length > 0) {
            openModal('.order');
            document.querySelector('.order__price').textContent = `Стоимость заказа: ${productPrice}`;
            document.querySelector('.order__discount').textContent = `Скидка: ${productDiscount}`;
            document.querySelector('.order__bonus').textContent = `Начислено бонусов: ${productBonus}`;
    
            productTitle.forEach(item => {
                productBox.innerHTML += `
                    <div class="order__products-title">${item.textContent}</div>
                `;
            });
        } else {
            document.querySelector('.content__cart-order-error').textContent = 'Ваша корзина пуста';
            // discountWrapper.insertBefore(notSelected, discountWrapper.nextSibling);
        };
    });

    document.querySelector('.order__sent').addEventListener('click', () => {
        let sendObj = {
            price: productPrice,
            discount: productDiscount,
            bonus: productBonus,
            name: inputName.value,
            tel: inputTel.value, 
            products: productsFromOrder
        };
        console.log(sendObj.price)
        postData('https://hobbyart-2cead-default-rtdb.firebaseio.com/order.json', sendObj);
        cleanModal(inputName, inputTel);
        closeModal('.order');
    });

    document.querySelector('.order__close').addEventListener('click', () => {
        closeModal('.order');
    });
};
orderingFromCart();