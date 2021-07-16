/* eslint-disable no-unused-expressions */
const themeChange = () => {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const inputChange = document.getElementById('color-theme');
  const themeSwitcher = document.querySelector('.theme-switcher');

  inputChange && window.addEventListener('load', (function () {
    window.navigator.userAgent.indexOf('MSIE ') > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)
      ? themeSwitcher.style.display = 'none'
      : themeSwitcher.classList.add('document-loaded');
  }));

  localStorage.getItem('--theme') || window.matchMedia('(prefers-color-scheme: light)').matches && (document.documentElement.classList.remove('dark'),
  inputChange.checked = !1,
  metaTheme && (metaTheme.content = '#ffffff'));

  const changeTheme = function () {
    document.activeElement.blur();
    const isInput = !!inputChange.checked;
    document.documentElement.classList[isInput ? 'add' : 'remove']('dark');
    if (metaTheme) {
      metaTheme.content = isInput ? '#252525' : '#ffffff';
    }
    localStorage.setItem('--theme', isInput ? 'dark' : 'light');
  };

  inputChange.addEventListener('change', changeTheme);
  if (localStorage.getItem('--theme')) {
    inputChange.checked = localStorage.getItem('--theme') === 'dark';
    changeTheme();
  }
};

export default themeChange;
