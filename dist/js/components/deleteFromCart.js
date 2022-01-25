let productFromCart = JSON.parse(localStorage.getItem('CartCards')),
    deleteCard = document.querySelectorAll('.content__cart-item-icon'),
    deleteAllCard = document.querySelector('.content__cart-clean'),
    emptyCart = [];

function deleteFromCart(item) {
    let card = item.parentElement.querySelector('.content__cart-item-title').textContent;
    let indexOfDelete = productFromCart.findIndex(item => item.title === card);
    productFromCart.splice(indexOfDelete, 1);
    localStorage.setItem('CartCards', JSON.stringify(productFromCart));
    window.location.reload();
}

deleteCard.forEach(item => {
    item.addEventListener('click', () => {
        deleteFromCart(item);
    });    
});

deleteAllCard.addEventListener('click', () => {
    localStorage.removeItem('CartCards');
    document.querySelector('.content__cart-wrap').innerHTML = '';
    localStorage.setItem('CartCards', JSON.stringify(emptyCart));
    window.location.reload();
});