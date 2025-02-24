document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const closeButton = document.getElementById('closeButton');
    const submenuButtons = document.querySelectorAll('.menu-item');
  
    // Toggle the navbar menu
    navbarToggle.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
    });
  
    // Close the navbar menu
    closeButton.addEventListener('click', function () {
      navbarMenu.classList.remove('active');
      submenuButtons.forEach(button => {
        const target = button.getAttribute('data-target');
        const submenu = document.getElementById(target);
        submenu.classList.remove('active');
        button.classList.remove('active');
      });
    });
  
    // Toggle the submenus
    submenuButtons.forEach(button => {
      button.addEventListener('click', function () {
        const target = button.getAttribute('data-target');
        const submenu = document.getElementById(target);
        submenu.classList.toggle('active');
        button.classList.toggle('active');
      });
    });
  
    // Close the submenu when clicking outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.navbar')) {
        navbarMenu.classList.remove('active');
        submenuButtons.forEach(button => {
          const target = button.getAttribute('data-target');
          const submenu = document.getElementById(target);
          submenu.classList.remove('active');
          button.classList.remove('active');
        });
      }
    });
  });
  