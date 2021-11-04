import lottie from 'lottie-web/build/player/lottie_html.min.js'

document.addEventListener('DOMContentLoaded', () => {
    lottie.loadAnimation({
		container: document.querySelector('.intro__img'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../lottie/data.json' // the path to the animation json
	  });
});