const initFilter = (navBlock, filterItems, containerBlock) => {
  let isCategoryActive = 'all';
  const btnList = navBlock.querySelectorAll('[data-category-nav]');

  const setClass = (btnCategory) => {
    filterItems.forEach((item) => {
      const categories = item.dataset.category.split(' ');
      const isCategory = categories.some((category) => category === btnCategory);
      item.classList.remove('hide');


      if (!isCategory && btnCategory !== 'all') {
        item.classList.add('hide');
      }
    });
  };

  const activeBtn = (button) => {
    btnList.forEach((btn) => {
      btn.classList.remove('active');

      if (btn.dataset.categoryNav === button.dataset.categoryNav) {
        btn.classList.add('active');
      }
    });
  };

  navBlock.addEventListener('click', (evt) => {
    const button = evt.target.closest('[data-category-nav]');

    if (!button) {
      return;
    }

    if (containerBlock.classList.contains('card-list--scale')) {
      return;
    }

    if (button.dataset.categoryNav === isCategoryActive) {
      return;
    }

    const categoryBtn = button.dataset.categoryNav;
    isCategoryActive = categoryBtn;

    setClass(categoryBtn, filterItems);
    activeBtn(button);
  });
};

const protfolioFilter = () => {
  const navBlock = document.querySelector('[data-filter="navigation"]');
  const containerBlock = document.querySelector('[data-filter="container"]');

  if (navBlock && containerBlock) {
    const filterItems = containerBlock.querySelectorAll('[data-category]');

    initFilter(navBlock, filterItems, containerBlock);
  }
};

export default protfolioFilter;
