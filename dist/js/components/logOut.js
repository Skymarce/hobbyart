document.querySelector('.card__form-out').addEventListener('click', () => {
    localStorage.removeItem('Admin');
    window.location = 'auth.html';
});