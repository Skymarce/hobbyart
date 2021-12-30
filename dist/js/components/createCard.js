import {postData} from '../services/postData.js';
import {config} from '../environments/environments.js';

let titleCard = document.querySelector('.card__form-title'),
    priceCard = document.querySelector('.card__form-price'),
    imgCard = document.querySelector('.card__form-img'),
    descrCard = document.querySelector('.card__form-descr'),
    colorArray = [];

    

function createCard() {
    let colorCard = document.querySelectorAll('.card__form-color');
    colorCard.forEach(item => {
        colorArray.push(item.value);
    })
        
    let cardObj = {
        title: `${titleCard.value}`,
        price: `${priceCard.value}`,
        img: `${imgCard.value}`,
        color: `${[colorArray]}`,
        description: `${descrCard.value}`
    }
    postData(`${config.fbUrl}catalog.json`, cardObj);

    alert('Ваша товар успешно создан');

    cleaningInput(colorCard);

}

function cleaningInput(colorCard) {
    
    titleCard.value = '';
    priceCard.value = '';
    imgCard.value = '';
    colorCard.forEach(item => {
        item.value = '';
    })
    descrCard.value = '';

}

document.querySelector('.card__form-create').addEventListener('click', () => {
    createCard();
})

