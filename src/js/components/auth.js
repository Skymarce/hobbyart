import {auth} from '../services/authFb.js';
import {config} from '../environments/environments.js';
import {closeModal} from './modal.js';

let inputMail = document.querySelector('.logIn__mail');
let inputPassword = document.querySelector('.password');
let error = document.createElement('div');
error.classList.add('login-error');
error.textContent = 'Вы ввели некорректные данные';

document.querySelector('.logIn__btn').addEventListener('click', () => {
    let authData = {
        "email": inputMail.value,
        "password": inputPassword.value,
        "returnSecureToken": true
    }
    auth(config.fbAuth, config.fbAPI, inputMail.value, inputPassword.value).then(data => checkAuth(data));

    function checkAuth(data) {
        if (data.hasOwnProperty('idToken') === true) {
            window.location = 'admin.html';
        } else {
            inputMail.style.border = '1px solid rgb(168, 1, 1)';
            inputPassword.style.border = '1px solid rgb(168, 1, 1)';
            document.querySelector('.logIn__password').insertBefore(error, inputPassword.nextSibling);
        }
    }
});

document.querySelector('.logIn__close').addEventListener('click', () => {
    closeModal('.logIn');
});