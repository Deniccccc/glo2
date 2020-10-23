let menuToogle = document.querySelector('#menu-toogle');
let menu = document.querySelector('.sidebar');
menuToogle.addEventListener('click', function (event) {

event.preventDefault();
menu.classList.toogle('.visible');
})