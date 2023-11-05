const navSection = document.querySelector('.navs-btn');
const closeBtn = document.querySelector('.closeBtn');
const openBtn = document.querySelector('.closeBtn');

openBtn.addEventListener('click', show);
closeBtn.addEventListener('click', close);

function show() {
	navSection.style.display = 'flex';
	navSection.style.top = '0';
}
function close() {
	navSection.style.top = '-100%';
}
