const navbarToggle = document.querySelector('.navbar-toggler');
const navCollapse = document.querySelector('#navbarSupportedContent');

(navbarToggle).addEventListener('click', () => {
navCollapse.classList.toggle('collapse');
});
