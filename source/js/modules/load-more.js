const loadMore = () => {
  const CARD_COUNT_PER_STEP = 3;
  const loadBtn = document.querySelector('[data-load-more="btn"]');
  const list = document.querySelector('[data-load-more="list"]');
  const items = list.querySelectorAll('[data-load-more="item"]');

  if (loadBtn && items.length) {
    if (items.length > CARD_COUNT_PER_STEP) {
      let showCardCount = CARD_COUNT_PER_STEP;

      loadBtn.style.display = 'flex';

      loadBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        items.forEach((item, index) => {
          if (index >= showCardCount && index < showCardCount + CARD_COUNT_PER_STEP) {
            item.classList.remove('hide');
          }
        });

        showCardCount += CARD_COUNT_PER_STEP;

        if (showCardCount >= items.length) {
          loadBtn.style.display = 'none';
        }
      });
    }
  }
};

export default loadMore;
