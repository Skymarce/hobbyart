function addToCard() {
    let toBin = document.querySelectorAll('.content__card-tobin');
    let array = [];

    toBin.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.parentElement.querySelector('.content__card-img-img').src;
            let title = item.parentElement.querySelector('.content__card-title').textContent;
            let color = item.parentElement.querySelector('.content__card-color').style.backgroundColor;
            let price = item.parentElement.querySelector('.content__card-price').textContent;

            let toBinObj = {
                title: `${title}`,
                img: `${img}`,
                color: `${color}`,
                price: `${price}`
            }
            array.push(toBinObj);
            localStorage.setItem('BinCards', JSON.stringify(array));
        })
    })
}

export {addToCard};