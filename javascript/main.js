(function() {
  const hamburgerButton = document.querySelector('#hamburger');
  const mobileMenuItems = document.querySelectorAll('.mobile-menu__item-link');
  const buttons = document.querySelectorAll('button');
  let isMenuOpen = false;

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function changeMenuStyles(newStyle) {
    const mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.style.maxHeight = newStyle;
  }

  function openCloseMobileMenu() {
    toggleMobileMenu();
    if (isMenuOpen) {
      changeMenuStyles('1000px');
    } else {
      changeMenuStyles('0');
    }
  }

  hamburgerButton.addEventListener('click', openCloseMobileMenu);

  mobileMenuItems.forEach(function(item) {
    item.addEventListener('click', openCloseMobileMenu);
  });

  buttons.forEach(function(item) {
    item.addEventListener('click', function() {
      alert("There is nothing attached to ME yet.");
    });
  });
})();
