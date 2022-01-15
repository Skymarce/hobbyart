import {postData} from "../services/postData.js";
import {config} from "../environments/environments.js";

let askName = document.querySelector('.ask__name'),
    askPhone = document.querySelector('.ask__phone');
    
function askForm() {
    
    document.querySelector('.ask__btn').addEventListener('click', () => {
        let userObj = {
            name: `${askName.value}`,
            phone: `${askPhone.value}`
        }
        postData(`${config.fbUrl}UsersData.json`, userObj);
    
        alert('Ваши данные получены, ожидайте звонка консультанта');
        
        cleaningInput();
    })
    
}



function cleaningInput() {
    askName.value = '';
    askPhone.value = '';
}

export {askForm};