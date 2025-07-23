
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#navbar__logo');
  

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    

    document.body.style.overflow = menuLinks.classList.contains('active') ? 'hidden' : '';
  };


  const closeMenu = () => {
    mobileMenu.classList.remove('is-active');
    menuLinks.classList.remove('active');
    document.body.style.overflow = '';
  };


  mobileMenu.addEventListener('click', toggleMenu);
  

  document.querySelectorAll('.navbar__links').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  

  navLogo.addEventListener('click', closeMenu);
  

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__menu') && 
        !e.target.closest('#mobile-menu') &&
        menuLinks.classList.contains('active')) {
      closeMenu();
    }
  });
  

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuLinks.classList.contains('active')) {
      closeMenu();
    }
  });
});