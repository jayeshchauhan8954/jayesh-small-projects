const body = document.body;
const images = document.querySelectorAll('.slide');
const leftButton = document.getElementById('leftArrow');
const rightButton = document.getElementById('rightArrow');

let imageIndex = 0;

rightButton.addEventListener('click', nextImage);

leftButton.addEventListener('click', priviousImage);

setBackgroundImage();

function nextImage() {
	imageIndex++;
	if (imageIndex > images.length - 1) {
		imageIndex = 0;
	}

	setActiveImage();
	setBackgroundImage();
}

function priviousImage() {
	imageIndex--;
	if (imageIndex < 0) {
		imageIndex = images.length - 1;
	}

	setActiveImage();
	setBackgroundImage();
}

function setActiveImage() {
	images.forEach((image) => image.classList.remove('active'));

	images[imageIndex].classList.add('active');
}

function setBackgroundImage() {
	body.style.backgroundImage = images[imageIndex].style.backgroundImage;
}
