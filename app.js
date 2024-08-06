const  menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarLogo');
const body = document.querySelector('body');

const mobileMenu = () => {
	
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
	body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);