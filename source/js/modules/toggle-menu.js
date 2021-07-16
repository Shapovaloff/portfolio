const toggleMenu = (btn, menuToggle, overlay) => {
  const linkList = menuToggle.querySelectorAll('[data-toggle-menu="link"]');

  const openMenu = () => {
    btn.classList.add('active');
    menuToggle.classList.add('active');
    overlay.classList.add('overlay--active');
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', closeMenu);
    linkList.forEach((link) => link.addEventListener('click', closeMenu));
  };

  const closeMenu = () => {
    btn.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = 'auto';
    linkList.forEach((link) => link.removeEventListener('click', closeMenu));
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
  const overlay = document.querySelector('.overlay');

  if (btnsToggle.length && menuToggle) {
    btnsToggle.forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleMenu(btn, menuToggle, overlay);
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 767 && menuToggle.classList.contains('active')) {
        btnsToggle.forEach((btn) => btn.classList.remove('active'));
        menuToggle.classList.remove('active');
        overlay.classList.remove('overlay--active');
        document.body.style.overflow = 'auto';
      }
    });
  }
};

export default initToggleMenu;
