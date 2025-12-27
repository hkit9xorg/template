// Theme switching using localStorage and DaisyUI themes
const THEME_KEY = 'template-theme';
const DEFAULT_THEME = 'light';
const themes = ['light', 'dark'];

const root = document.documentElement;

function setTheme(theme) {
  const resolved = themes.includes(theme) ? theme : DEFAULT_THEME;
  root.setAttribute('data-theme', resolved);
  localStorage.setItem(THEME_KEY, resolved);
  const toggleIcon = document.getElementById('theme-icon');
  if (toggleIcon) {
    toggleIcon.className = resolved === 'dark' ? 'ri-moon-clear-line' : 'ri-sun-line';
  }
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  setTheme(stored || DEFAULT_THEME);
}

function toggleTheme() {
  const current = root.getAttribute('data-theme') || DEFAULT_THEME;
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }
});
