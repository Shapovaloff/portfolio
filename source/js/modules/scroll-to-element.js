const scrollToElement = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (evt) => {
      let scrollContainer = window;
      if (link.dataset.scrollContainer) {
        const name = link.dataset.scrollContainer;
        if (name) {
          scrollContainer = document.querySelector(name);
        }
      }

      evt.preventDefault();
      let href = link.getAttribute('href').substr(1);
      const scrollElement = document.getElementById(href);
      if (scrollElement) {
        const elementPosition = scrollElement.getBoundingClientRect().top;
        const topOffset = document.querySelector('.header').offsetHeight; // если header закреплён
        const offsetPosition = elementPosition - topOffset; // если header закреплён

        scrollContainer.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

export default scrollToElement;
