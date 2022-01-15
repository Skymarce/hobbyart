import {deleteData} from '../services/deleteData.js';
import {config} from '../environments/environments.js';

function deleteOrder() {
    document.querySelectorAll('.orders__done ').forEach(item => {
        item.addEventListener('click', () => {
            deleteData(`${config.fbUrl}order/${item.id}.json`);
            alert('Заказ успешно обработан');
            window.location.reload();
        })
    })
}

export {deleteOrder};