var navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*============== Show Nav ============*/

navToggle.addEventListener('click', function() {
  navMenu.classList.add('show-menu')
});

/*============== Hide Nav ============*/

navClose.addEventListener('click', function() {
  navMenu.classList.remove('show-menu')
});
