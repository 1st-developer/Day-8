document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const login = document.querySelector('.btn');
    const close = document.querySelector('.icon-close');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    

    loginLink.addEventListener('click', function () {
        wrapper.classList.add('slide');
    });
    registerLink.addEventListener('click', function () {
        wrapper.classList.remove('slide');
    });

    login.addEventListener('click', function () {
        wrapper.classList.add('show');
    });
    close.addEventListener('click', function () {
        wrapper.classList.remove('show');
    });

});