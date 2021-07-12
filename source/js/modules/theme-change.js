const themeChange = () => {
  const inputChange = document.getElementById('color-theme');

  if (inputChange) {
    inputChange.addEventListener('input', (evt) => {
      evt.preventDefault();

      if (evt.target.checked) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }
};

export default themeChange;
