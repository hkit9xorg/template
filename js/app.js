// Core interactions: drawer, dropdowns, and helpers

document.addEventListener('DOMContentLoaded', () => {
  const drawerCheckbox = document.getElementById('drawer-toggle');
  const drawerCloseButtons = document.querySelectorAll('[data-drawer-close]');

  drawerCloseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (drawerCheckbox) drawerCheckbox.checked = false;
    });
  });

  const sidebarLinks = document.querySelectorAll('.drawer-side a');
  const currentPath = window.location.pathname.split('/').pop();
  sidebarLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith(currentPath)) {
      link.classList.add('active');
    }
  });
});
