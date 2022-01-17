import {getData} from '../services/getData.js';
import {config} from '../environments/environments.js';
import {closeModal, openModal} from './modal.js';
import {addToFavorites} from './addToFavorites.js';
import {addToCard} from './addToCard.js';

getData(`${config.fbUrl}catalog.json`).then(catalog => searchingCards(Object.entries(catalog)));

function searchingCards(catalog) {
    let searchInput = document.querySelector('.searching');
    
    document.querySelector('.navigation___user-search').addEventListener('click', () => {
        let filteredCatalog = catalog.filter(item => item[1].title.toLowerCase().includes(searchInput.value.toLowerCase()));

        if (filteredCatalog.length === 0) {
            alert('Товаров по вашему не запросу не найдено')
        } else {
            filteredCatalog.forEach(item => {
                document.querySelector('.result__wrapper').innerHTML += `
                    <div class="content__card">
                        <div class="content__card-wrapper">
                            <div class="content__card-btns">
                                <button class="content__card-btns-like" type="button">
                                    <img class="content__card-btn-like" src="icons/like.svg" alt="like">
                                </button>
                                <button class="content__card-btns-more">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <div class="content__card-img">
                                <img class="content__card-img-img" src="${item[1].img}" alt="twine">
                            </div>
                            <div class="content__card-title">${item[1].title}</div>
                            <div class="content__card-colors">
                                <span class="content__card-color"></span>
                            </div>
                            <div class="content__card-price">${item[1].price} ₽</div>
                            <button class="content__card-tobin">
                                <img src="icons/nav/bag.svg" alt="bin"> В корзину
                            </button>
                        </div>
                    </div>
                `;
            });
            openModal('.result');
            addToCard();
            addToFavorites();
        }
        
    });
    
    document.querySelector('.result__close').addEventListener('click', () => {
        closeModal('.result');
        document.querySelector('.result__wrapper').innerHTML = '';
    })
}