const setClass = (params, buttons, parent, nameClass) => {
  const cardList = parent.querySelector('[data-card-view="list"]');

  buttons.forEach((item) => cardList.classList.remove(item.dataset.cardSetting));

  cardList.classList.add(nameClass);
};

const settingButtonClickHandler = (evt, buttons, parent) => {
  const button = evt.target.closest('button');

  if (!button) {
    return;
  }

  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');

  const params = [];
  const nameClass = button.dataset.cardSetting;
  params.push(nameClass);
  setClass(params, buttons, parent, nameClass);
};


const initCardViewAction = (cardParent) => {
  const buttons = cardParent.querySelectorAll('[data-card-view="button"]');
  const cardList = cardParent.querySelector('[data-card-view="list"]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, buttons, cardParent);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 767 && cardList.classList.contains('tile')) {
      cardList.classList.remove('tile');
    }
  });
};

const initCardView = () => {
  const cardsView = document.querySelectorAll('[data-card-view="parent"]');

  if (cardsView) {
    cardsView.forEach((card) => initCardViewAction(card));
  }
};

export default initCardView;
