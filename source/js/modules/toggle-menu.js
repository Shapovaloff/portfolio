const toggleMenu = (btn, menuToggle) => {
  const overlay = document.querySelector('.overlay');

  const openMenu = () => {
    btn.classList.add('active');
    menuToggle.classList.add('active');
    overlay.classList.add('overlay--active');
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    btn.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = 'auto';
    overlay.removeEventListener('click', closeMenu);
  };

  if (btn.classList.contains('active') && menuToggle.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
};


const initToggleMenu = () => {
  const btnsToggle = document.querySelectorAll('[data-toggle-menu="button"]');
  const menuToggle = document.querySelector('[data-toggle-menu="navigation"]');

  if (btnsToggle.length && menuToggle) {
    btnsToggle.forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleMenu(btn, menuToggle);
      });
    });
  }
};

export default initToggleMenu;

// Открытие и закрытие меню в мобильной версии
// const btnMenu = document.querySelector('.js-btn-menu');
// const navMenu = document.querySelector('.js-nav-menu');

// const closeMenu = () => {
//   navMenu.classList.remove('nav-list--active');
//   overlay.classList.remove('overlay--active');
//   btnMenu.classList.remove('header__btn-toggle--active');
//   document.body.style.overflow = 'auto';
// };

// const openMenu = () => {
//   navMenu.classList.add('nav-list--active');
//   overlay.classList.add('overlay--active');
//   btnMenu.classList.add('header__btn-toggle--active');
//   overlay.addEventListener('click', closeMenu);
//   document.body.style.overflow = 'hidden';
// };

// if (btnMenu && navMenu) {
//   btnMenu.addEventListener('click', () => {
//     btnMenu.classList.contains('header__btn-toggle--active') ? closeMenu() : openMenu();
//   });
// }
