const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.nav');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});