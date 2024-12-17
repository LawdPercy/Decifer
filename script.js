document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            const target = this.getAttribute('data-target');
            const submenu = document.getElementById(target);

            // Toggle the display of the submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

            // Close other open submenus
            document.querySelectorAll('.submenu').forEach(sm => {
                if (sm !== submenu) {
                    sm.style.display = 'none';
                }
            });
        });
    });

    // Toggle navbar menu display on mobile
    navbarToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close submenus if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-menu') && !event.target.closest('#navbarToggle')) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.style.display = 'none';
            });
            navbarMenu.style.display = 'none';
        }
    });
});
