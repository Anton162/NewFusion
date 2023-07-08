document.addEventListener('DOMContentLoaded', function() {
  var burgerMenuButton = document.querySelector('.burger__menu');
  var menuCloseButton = document.querySelector('.menu_close');
  var menuActive = document.querySelector('.menu_active');

  function toggleMenu() {
    menuActive.classList.toggle('hidden');
  }

  burgerMenuButton.addEventListener('click', toggleMenu);
  menuCloseButton.addEventListener('click', toggleMenu);
});
