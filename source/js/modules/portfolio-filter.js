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

const initFilter = (filterItems) => {
  window.setClass = (btnCategory) => {
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
};

const portfolioFilter = () => {
  const containerBlock = document.querySelector('[data-filter="container"]');

  if (containerBlock) {
    const filterItems = containerBlock.querySelectorAll('[data-category]');

    initFilter(filterItems);
  }
};

export default portfolioFilter;
