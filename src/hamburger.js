const menu = document.getElementById("hamburger-menu");
const button = document.getElementById("hamburger-button");
const close = document.getElementById("close-button");
const header = document.querySelector('header');

button.addEventListener('click',() => {
    button.classList.add('is-active');
    menu.classList.add('is-active');
    close.classList.add('is-active');
    header.classList.add('is-active');
});

close.addEventListener('click',() => {
    button.classList.remove('is-active');
    menu.classList.remove('is-active');
    close.classList.remove('is-active');
    header.classList.remove('is-active');
});