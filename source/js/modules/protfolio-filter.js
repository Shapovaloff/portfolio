const CARD_COUNT_PER_STEP = 3;
const loadBtn = document.querySelector('[data-load-more="btn"]');
const list = document.querySelector('[data-load-more="list"]');

const isloadBtn = () => {
  let showCardCount = CARD_COUNT_PER_STEP;
  const items = list.querySelectorAll('[data-load-more="item"]:not(.hide-filter)');

  window.isBtnLoad = (evt) => {
    evt.preventDefault();

    items.forEach((item, index) => {
      if (index >= showCardCount && index < showCardCount + CARD_COUNT_PER_STEP) {
        item.classList.remove('hide');
      }
    });

    showCardCount += CARD_COUNT_PER_STEP;

    if (showCardCount >= items.length) {
      loadBtn.style.display = 'none';
      loadBtn.removeEventListener('click', window.isBtnLoad);
    }
  };

  if (loadBtn && items.length) {
    loadBtn.style.display = 'none';

    items.forEach((item, index) => {
      item.classList.add('hide');

      if (index < CARD_COUNT_PER_STEP) {
        item.classList.remove('hide');
      }
    });

    if (items.length > CARD_COUNT_PER_STEP) {
      loadBtn.style.display = 'flex';
      loadBtn.addEventListener('click', window.isBtnLoad);
    }
  }
};

isloadBtn();

const initFilter = (navBlock, filterItems) => {

  let isCategoryActive = 'all';
  const btnList = navBlock.querySelectorAll('[data-category-nav]');

  const setClass = (btnCategory) => {
    filterItems.forEach((item) => {
      const categories = item.dataset.category.split(' ');
      const isCategory = categories.some((category) => category === btnCategory);
      item.classList.remove('hide-filter');


      if (!isCategory && btnCategory !== 'all') {
        item.classList.add('hide-filter');
      }
    });

    loadBtn.removeEventListener('click', window.isBtnLoad);
    isloadBtn();
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

    initFilter(navBlock, filterItems);
  }
};

export default protfolioFilter;
