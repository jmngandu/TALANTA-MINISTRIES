const navSection = document.querySelector('.navs-btn');
const closeBtn = document.querySelector('.closeBtn');
const openBtn = document.querySelector('.openBtn');

openBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);

function showMenu() {
	navSection.style.display = 'flex';
	openBtn.style.display = 'none';
	openBtn.style.display = 'closeBtn';
}
function closeMenu() {
	// navSection.style.top = '-100%';
	closeBtn.style.display = 'block';
}
