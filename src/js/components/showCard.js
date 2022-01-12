import {getData} from "../services/getData.js";
import {addToCard} from "./addToCard.js";
import {addToFavorites} from "./addToFavorites.js";

import {config} from '../environments/environments.js';

function showCard() {
    getData(`${config.fbUrl}catalog.json`).then(catalog => {representCards(catalog), addToCard(), addToFavorites()});
}

showCard();

function representCards(catalog) {

    for (let key in catalog) {
        document.querySelector('.content__cards').innerHTML += `
            <div class="content__card">
                <div class="content__card-wrapper">
                    <div class="content__card-btns">
                        <button class="content__card-btns-like" type="button">
                            <img src="icons/like.svg" alt="like">
                        </button>
                        <button class="content__card-btns-more">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="content__card-img">
                        <img class="content__card-img-img" src="${catalog[key].img}" alt="twine">
                    </div>
                    <div class="content__card-title">${catalog[key].title}</div>
                    <div class="content__card-colors">
                        <span class="content__card-color"></span>
                    </div>
                    <div class="content__card-price">${catalog[key].price} ₽</div>
                    <button class="content__card-tobin">
                        <img src="icons/nav/bag.svg" alt="bin"> В корзину
                    </button>
                </div>
            </div>
        `;

        let spanColor = document.querySelectorAll('.content__card-color');

        spanColor.forEach(item => {
            item.style.backgroundColor += `#${catalog[key].color}`;
        })
    }
}

export {showCard};