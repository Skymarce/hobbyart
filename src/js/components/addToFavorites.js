function addToFavorites() {
    let buttonsToFavorites = document.querySelectorAll('.content__card-btns-like');

    buttonsToFavorites.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.querySelector('.content__card-img-img').src;
            let title = item.parentElement.querySelector('.content__card-title').textContent;
            let price = item.parentElement.querySelector('.content__card-price').textContent;
        })
    })
}

export {addToFavorites};