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

  buttons.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, buttons, cardParent);
    });
  });
};

const initCardView = () => {
  const cardsView = document.querySelectorAll('[data-card-view="parent"]');
  if (cardsView) {
    cardsView.forEach((card) => initCardViewAction(card));
  }
};

export default initCardView;
