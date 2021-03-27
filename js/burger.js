
let body = document.querySelector('body');
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerPhone = document.querySelector('.header__phone');
if (headerBurger) {
		headerBurger.addEventListener('click', function(e){
			headerBurger.classList.toggle('_active');
			headerMenu.classList.toggle('_active');
			if (headerBurger.classList.contains('_active')) {
				body.classList.add('_lock');
			} else {
				body.classList.remove('_lock');
			}
		});
};
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	body.classList.add('_mobile');
}