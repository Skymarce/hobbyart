document.querySelector('.navigation__logout').addEventListener('click', () => {
    localStorage.removeItem('Admin');
    window.location = 'auth.html';
});