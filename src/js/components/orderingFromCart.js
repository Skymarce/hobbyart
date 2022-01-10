import {openModal, closeModal, cleanModal} from './modal.js';
import {postData} from '../services/postData.js';

function orderingFromCart() {
    let productPrice = document.querySelector('.content__trash-order-all-sum').textContent;
    let productDiscount = document.querySelector('#discount').textContent;
    let productBonus = document.querySelector('.content__trash-order-bonus-sum').textContent;
    let productTitle = document.querySelectorAll('.content__trash-item-title');
    let productBox = document.querySelector('.order__products-list');
    let inputName = document.querySelector('.order__name');
    let inputTel = document.querySelector('.order__phone');
    let productsFromOrder = JSON.parse(localStorage.getItem('BinCards'));

    document.querySelector('.content__trash-order-btn').addEventListener('click', () => {
        openModal('.order');
        document.querySelector('.order__price').textContent = `Стоимость заказа: ${productPrice}`;
        document.querySelector('.order__discount').textContent = `Скидка: ${productDiscount}`;
        document.querySelector('.order__bonus').textContent = `Начислено: ${productBonus}`;

        productTitle.forEach(item => {
            productBox.innerHTML += `
                <div class="order__products-title">${item.textContent}</div>
            `;
        })
    })

    document.querySelector('.order__sent').addEventListener('click', () => {
        let sendObj = {
            price: productPrice,
            discount: productDiscount,
            bonus: productBonus,
            name: inputName.value,
            tel: inputTel.value, 
            products: productsFromOrder
        }
        console.log(sendObj.price)
        postData('https://hobbyart-2cead-default-rtdb.firebaseio.com/order.json', sendObj);
        cleanModal(inputName, inputTel);
    })

    document.querySelector('.order__close').addEventListener('click', () => {
        closeModal('.order');
        productBox.innerHTML = '';
    })
}

orderingFromCart();