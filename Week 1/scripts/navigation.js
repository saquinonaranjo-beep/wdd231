const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('show');
    hamButton.classList.toggle('show');
});