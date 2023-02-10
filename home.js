const headerRight = document.querySelector('.header_right');
const menuButton = document.querySelector('.fa-bars');

menuButton.addEventListener('click', function() {
  headerRight.classList.toggle('active');
});