function addToFavorites() {
    let buttonsToFavorites = document.querySelectorAll('.content__card-btns-like');
    let favorites = [];

    buttonsToFavorites.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.parentElement.querySelector('.content__card-img-img').src;
            let title = item.parentElement.parentElement.querySelector('.content__card-title').textContent;
            let color = item.parentElement.parentElement.querySelector('.content__card-color').style.backgroundColor;
            let price = item.parentElement.parentElement.querySelector('.content__card-price').textContent;
            

            let favoritesProducts = {
                img: img,
                title: title,
                color: color,
                price: price
            }

            favorites.push(favoritesProducts)
            localStorage.setItem('Favorites', JSON.stringify(favorites));
        })
    })
}

export {addToFavorites};