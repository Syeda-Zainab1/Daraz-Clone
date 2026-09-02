
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('menue');

  // Open menu on hamburger click
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  // Close menu on X click
  menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
