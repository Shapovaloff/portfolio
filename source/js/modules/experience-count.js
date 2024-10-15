const declinationText = {
  'years': ['год', 'года', 'лет'],
  'month': ['месяц', 'месяца', 'месяцев'],
};

const declination = (numb, name = 'years') => {
  const worlds = declinationText[name];
  const cases = [2, 0, 1, 1, 1, 2];
  return worlds[(numb % 100 >4 && numb % 100 < 20)? 2 : cases[(numb % 10 < 5) ? numb % 10 : 5]];
}

const monthDiff = (d1, d2) => {
  return (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth() + 1);
}

const experienceCount = () => {
  const allText = document.querySelectorAll("[data-experience='text']");
  if (!allText.length) return;

  const allMonth = monthDiff(new Date(2020, 8), new Date());
  const countYears = parseInt(allMonth / 12);
  const countMonth = allMonth % 12;
  const stringYears = countYears > 0 ? `${countYears} ${declination(countYears, 'years')}` : '';
  const stringMonth = countMonth > 0 ? `${countMonth} ${declination(countMonth, 'month')}` : '';
  const text = `${stringYears}${stringYears && stringMonth && ' и '}${stringMonth}`
  allText.forEach((item) => item.textContent = text);
}

export default experienceCount;
