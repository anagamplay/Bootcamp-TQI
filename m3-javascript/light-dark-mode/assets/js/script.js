const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');
const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode);

function changeMode (){
    changeClass();
    changeText();
}

function changeClass() {
    body.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText() {
	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = 'Light Mode';
		h1.innerHTML = 'Dark Mode ON';
		return;
	}
	button.innerHTML = 'Dark Mode';
	h1.innerHTML = 'Light Mode ON';
}