let addColorBtn = document.querySelector('.card__form-addcolor');

function addcolor() {
    let newInput = document.createElement('input');
    newInput.classList.add('card__form-color');
    newInput.placeholder = 'Цвет, 000000';
    addColorBtn.before(newInput);
}

addColorBtn.addEventListener('click', () => {
    addcolor();
});