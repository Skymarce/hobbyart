import {auth} from '../services/authFb.js';
import {config} from '../environments/environments.js';

let inputMail = document.querySelector('.logIn__mail');
let inputPassword = document.querySelector('.password');
let userEmail = '';

let error = document.createElement('div');
error.classList.add('login-error');
error.textContent = 'Вы ввели некорректные данные';

if (localStorage.getItem('rememberData')) {
    autoFill();
};

function autoFill() {
    let userData = JSON.parse(localStorage.getItem('rememberData'));
    inputMail.value = userData.email;
    inputPassword.value = userData.password;
};

document.querySelector('.logIn__btn').addEventListener('click', () => {
    
    let authData = {
        "email": inputMail.value,
        "password": inputPassword.value,
        "returnSecureToken": true
    };

    auth(config.fbAuth, config.fbAPI, inputMail.value, inputPassword.value).then(data => checkAuth(data));
    
    function checkAuth(data) {
        if (data.hasOwnProperty('idToken') === true) {
            localStorage.setItem('Admin', JSON.stringify(optimizeData(data)));
            rememberData();
            window.location = 'admin.html';
        } else {
            inputMail.style.border = '1px solid rgb(168, 1, 1)';
            inputPassword.style.border = '1px solid rgb(168, 1, 1)';
            document.querySelector('.logIn__password').insertBefore(error, inputPassword.nextSibling);
        };
    };

    function optimizeData(data) {
        const expData = new Date(new Date().getTime() + +data.expiresIn * 1000);
        let newObj = {
            email: data.email,
            expiresIn: expData,
            idToken: data.idToken
        };
        return newObj;
    };

    function rememberData() {
        let checkInput = document.querySelector('.input__memory');
        if (checkInput.checked) {
            let remeberObj = {
                email: inputMail.value,
                password: inputPassword.value
            };
            localStorage.setItem('rememberData', JSON.stringify(remeberObj));
        }; 
    };
});