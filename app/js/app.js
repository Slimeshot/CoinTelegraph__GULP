// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
let num;
do {
num = +prompt("Введите пароль", '');
} while (num !== 60224902);

document.addEventListener('DOMContentLoaded', () => {





	document.querySelectorAll('a[href^="#"]').forEach(link => {

		link.addEventListener('click', function(e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			// let topOffset;
			const topOffset = 0; // если не нужен отступ сверху

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});




	// let inputName = document.querySelector('.call__name');
	// let inputEmail = document.querySelector('.call__email');
	

	// inputName.addEventListener('input', () => {
	// 	chekInputs()
	// })
	// inputEmail.addEventListener('input', () => {
	// 	let data = inputEmail.value
	// 	let re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
	// 	let result = re.test(data)
	// 	chekInputs(result)
		

	// })


	// function chekRecapcha() {
	// 	chekInputs()
	// }

	// function chekInputs(info) {
	// 	if (inputName.length !== 0 & info) {
	// 		callBtn.removeAttribute('disabled')
	// 	} else {
	// 		callBtn.setAttribute('disabled', 'disabled')
	// 	}
	// }
	
	
	// function chekInputs(info) {
	// 	if ((grecaptcha.getResponse()).length !== 0 & inputName.length !== 0 & info) {
	// 		callBtn.removeAttribute('disabled')
	// 	} else {
	// 		callBtn.setAttribute('disabled', 'disabled')
	// 	}
	// }
	// плавный переход к ссылкам

})