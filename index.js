// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const navItems = document.querySelectorAll('.nav-item');
const menuSection = document.getElementById('menu-section');

function scrollToMenu() {
  menuSection.scrollIntoView({ behavior: 'smooth' });
}
toggleBtn.addEventListener('click', scrollToMenu);
navItems.forEach(el => el.addEventListener('click', scrollToMenu));

window.onload = function() {
  if (window.location.hash) {
      window.scrollTo(0, 0);
  }
};

const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });

    if (currentUrl === navLink.href) {
      navLink.classList.add('active');
    }
});

const openPopUps = document.querySelectorAll('.open_pop_up');
const closePopUps = document.querySelectorAll('.pop_up_close');
const popUps = document.querySelectorAll('.pop_up');

openPopUps.forEach((openPopUp, index) => {
  openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUps[index].classList.add('active');
  });
});

closePopUps.forEach((closePopUp, index) => {
  closePopUp.addEventListener('click', () => {
    popUps[index].classList.remove('active');
  });
});
