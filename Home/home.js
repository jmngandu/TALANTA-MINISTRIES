const navSection = document.querySelector('.navs-btn');
const closeBtn = document.querySelector('.closeBtn');
const openBtn = document.querySelector('.openBtn');
closeBtn.addEventListener('click', function () {
	closeBtn.style.display = 'none';
	openBtn.style.display = 'block';
	navSection.style.display = 'none';
});
openBtn.addEventListener('click', showMenu);
function showMenu() {
	navSection.style.display = 'flex';
	openBtn.style.display = 'none';
	closeBtn.style.display = 'block';
}
