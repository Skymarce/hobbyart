import {getData} from '../services/getData.js';
import {config} from '../environments/environments.js';
import {deleteOrder} from './deleteOrder.js';

/* if (order === undefined || order === null) {
    alert('Заказов нет')
} else {
    
} */

getData(`${config.fbUrl}order.json`).then(order => {representOrders(Object.entries(order)), deleteOrder()});


function representOrders(order) {
    console.log(order);
    order.forEach(item => {
        document.querySelector('.orders__content').innerHTML += `
            <table class="table table-dark table-striped">
                <tr class="table-dark">
                    <td>Данные покупателя</td>
                    <td>Номер телефона</td>
                    <td>Бонусы</td>
                    <td>Скидка</td>
                    <td>Стоимость товара</td>
                    <td>Товар(ы)</td>
                    <td>Стоимость заказа</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${item[1].name}</td>
                    <td>${item[1].tel}</td>
                    <td>${item[1].bonus}</td>
                    <td>${item[1].discount}</td>
                    <td>${getPrice(item[1].products)}</td>
                    <td>${getTitle(item[1].products)}</td>
                    <td>${item[1].price}</td>
                    <td>
                        <button id=${item[0]} class="orders__done">Подтвердить заказ</button>
                    </td>
                </tr>
            </table>
        `;
    })
}

function getTitle(products) {
    let out = '';

    products.forEach(elem => {
        out += `<div>${elem.title}</div>`;
    })
    return out;
}

function getPrice(products) {
    let out = '';

    products.forEach(elem => {
        out += `<div>${elem.price}</div>`;
    })
    return out;
}

document.querySelector('.orders__return').addEventListener('click', () => {
    window.location = 'admin.html';
})