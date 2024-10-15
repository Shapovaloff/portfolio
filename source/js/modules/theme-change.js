/* eslint-disable no-unused-expressions */
const themeChange = () => {
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  const currentTheme = localStorage.getItem('--theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  let isDark = currentTheme.toString() === 'dark';

  const changeTheme = () => {
    isDark ? document.documentElement.dataset.theme = 'dark' : document.documentElement.removeAttribute('data-theme');
    metaTheme.content = isDark ? '#252525' : '#ffffff';
    localStorage.setItem('--theme', isDark ? 'dark' : 'light');
  };

  changeTheme();

  document.addEventListener('click', (evt) => {
    const btn = evt.target.closest('[data-change-theme="btn"]');
    if (!btn) return;

    isDark = !(document.documentElement?.dataset?.theme === 'dark');
    changeTheme();
  });
};

themeChange();
