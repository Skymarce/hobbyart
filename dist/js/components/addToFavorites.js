import {openModal} from './modal.js';

let amountFavorites = document.querySelector('.navigation__amount-select');

function addToFavorites() {
    let buttonsToFavorites = document.querySelectorAll('.content__card-btn-like'),
        favorites = [],
        flag = false;

    buttonsToFavorites.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.parentElement.parentElement.querySelector('.content__card-img-img').src,
                title = item.parentElement.parentElement.parentElement.querySelector('.content__card-title').textContent,
                color = item.parentElement.parentElement.parentElement.querySelector('.content__card-color').style.backgroundColor,
                price = item.parentElement.parentElement.parentElement.querySelector('.content__card-price').textContent;

            let favoritesProducts = {
                img: img,
                title: title,
                color: color,
                price: price
            }

            JSON.parse(localStorage.getItem('Favorites'))?.forEach(elem => {
                if (elem.title === title) {
                    flag = true;
                    alert('Этот товар уже добавлен в избранное');
                } else {
                    flag = false;
                }
            })

            if (flag === true) {
                return;
            }

            if (localStorage.getItem('Favorites')) {
                favorites = JSON.parse(localStorage.getItem('Favorites'));
            }

            favorites.push(favoritesProducts);
            localStorage.setItem('Favorites', JSON.stringify(favorites));

            item.src = '../../icons/like_active.svg';
            showAmountFavorites();
        });
    });
};



function showAmountFavorites() {
    amountFavorites.textContent = JSON.parse(localStorage.getItem('Favorites'))?.length;
    openModal('.navigation__amount-select');
}
showAmountFavorites();

export {addToFavorites,showAmountFavorites};