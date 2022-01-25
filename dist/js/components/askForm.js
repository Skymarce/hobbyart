import {postData} from "../services/postData.js";
import {config} from "../environments/environments.js";

let askName = document.querySelector('.ask__name'),
    askPhone = document.querySelector('.ask__phone');
    
function askForm() {
    
    document.querySelector('.ask__btn').addEventListener('click', () => {
        if (askName.value !== '' && askPhone.value !== '') {
            let userObj = {
                name: `${askName.value}`,
                phone: `${askPhone.value}`
            };
            postData(`${config.fbUrl}UsersData.json`, userObj);
        
            alert('Ваши данные получены, ожидайте звонка консультанта');
            
            cleaningInput();
            window.location.reload();
        } else {
            document.querySelector('.ask__error').textContent = 'Вы не заполнили данные';
        };
    });
    
};

function cleaningInput() {
    askName.value = '';
    askPhone.value = '';
};

export {askForm};