const modal = document.querySelector('.modal-container');
const feedbackForm = document.querySelector('.feedback-form-button');
const modalCloseButton = document.querySelector('.modal-close');

const next = document.querySelector('.button-next');
const previous = document.querySelector('.button-previous');
const sliderItemsTags = document.querySelectorAll('.slider-item');
const bullets = document.querySelectorAll('.dots');

if (feedbackForm) {
  feedbackForm.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function (importantEvent) {
    modal.classList.remove('modal-container-open');
  })
}

/*SLIDER*/

const model = [true, false, false];

document.body.classList.add('slider-blue');

const renderActiveScreen = (index) => {
  document.querySelector('.slider-active').classList.remove('slider-active');
  const sliderItems = Array.from(sliderItemsTags);
  sliderItems[index].classList.add('slider-active');
  sliderItems.slice(index).forEach((item, i) => {
    item.style.order = i;
  });

  sliderItems.slice(0, index).forEach((item, i) => {
    item.style.order = sliderItems.length - index + i;
  });

  document.body.classList.remove(...document.body.classList);
  document.body.classList.add(`slider-theme-${index + 1}`);

  document.querySelector('.dots-active').classList.remove('dots-active');
  Array.from(bullets)[index].classList.add('dots-active');
}

const getNextScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current < model.length - 1 ? current + 1 : 0;
  model[current] = true;
  return current;
};

const getPreviousScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current > 0 ? current - 1 : model.length - 1;
  model[current] = true;
  return current;
};

const getActiveScreen = (index) => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = index;
  model[current] = true;
  return current;
}

next.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getNextScreen());
});

previous.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getPreviousScreen());
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderActiveScreen(getActiveScreen(index));
  })
});
