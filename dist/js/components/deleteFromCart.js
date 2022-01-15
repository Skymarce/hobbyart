let productFromCart = JSON.parse(localStorage.getItem('BinCards'));
let deleteBtn = document.querySelectorAll('.content__trash-item-icon');

function deleteFromCart(item) {
    let card = item.parentElement.querySelector('.content__trash-item-title').textContent;
    let indexOfDelete = productFromCart.findIndex(item => item.title === card)
    productFromCart.splice(indexOfDelete, 1);
    localStorage.setItem('BinCards', JSON.stringify(productFromCart));
    window.location.reload();
}

deleteBtn.forEach(item => {
    item.addEventListener('click', () => {
        deleteFromCart(item);
    })    
})