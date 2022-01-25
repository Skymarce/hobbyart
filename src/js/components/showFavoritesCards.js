import {addToCart} from './addToCart.js';

let button = document.querySelector('.content__account-favorites')

function showFavoritesCards() {
    let favorites = JSON.parse(localStorage.getItem('Favorites'));

    favorites.forEach(item => {
        document.querySelector('.content__account-occupancy-cards').innerHTML += `
            <div class="content__card">
                <div class="content__card-wrapper">
                    <div class="content__card-btns">
                        <button class="content__card-btns-like">
                            <img class="content__card-btn-like" src="icons/like_active.svg" alt="like">
                        </button>
                        <button class="content__card-btns-more">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="content__card-img">
                        <img class="content__card-img-img" src="${item.img}" alt="twine">
                    </div>
                    <div class="content__card-title">${item.title}</div>
                    <div class="content__card-colors">
                        <span class="content__card-color"></span>
                    </div>
                    <div class="content__card-price">${item.price}</div>
                    <button class="content__card-tobin">
                        <img src="icons/nav/bag.svg" alt="bin"> В корзину
                    </button>
                </div>
            </div>
        `;

        let spanColor = document.querySelectorAll('.content__card-color');

        spanColor.forEach(elem => {
            elem.style.backgroundColor += item.color;
        });
    });
    addToCart();
};
showFavoritesCards();

button.addEventListener('click', () => {
    button.classList.add('active');
});