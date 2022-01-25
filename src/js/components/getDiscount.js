let discount = 20;

function getDiscount() {
    let quantity = JSON.parse(localStorage.getItem('CartCards')).length;
    let totalDiscount = document.querySelector('#discount');

    switch(quantity) {
        case 0: discount = 0;
        case 1: discount;
        break;
        case 2: discount *= 2;
        break;
        case 3: discount *= 3; 
        break;
        case 4: discount *= 4; 
        break;
        case 5: discount *= 5; 
        break;
        default: discount *= 10;
    };
    
    totalDiscount.textContent = `${discount} ₽`;
};
getDiscount();

export {discount};