let buttons = document.querySelectorAll('.content__card-btn-like');

function deleteFromFavorites(item) {
    let favorites = JSON.parse(localStorage.getItem('Favorites'));
    let title = item.parentElement.parentElement.parentElement.querySelector('.content__card-title').textContent;

    let indexOfDelete = favorites.findIndex(item => item.title === title);
    favorites.splice(indexOfDelete, 1);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
    window.location.reload();
};

buttons.forEach(item => {
    item.addEventListener('click', () => {
        deleteFromFavorites(item);
    });
});