let authData = JSON.parse(localStorage.getItem('Admin'));

function addEmail() {
    document.querySelector('.card__form-email').textContent = `Ваш e-mail: ${authData.email}`;
}
addEmail();

function checkingAuth() {
    if (new Date(new Date().getTime()) > new Date(authData.expiresIn)) {
        localStorage.removeItem('Admin');
        window.location = 'auth.html';
    }
}

setInterval(() => {
    checkingAuth();
}, 5000)