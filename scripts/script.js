const modal = document.querySelector('.modal-container');
const feedbackForm = document.querySelector('.feedback-form-button');
const modalCloseButton = document.querySelector('.modal-close');

if (feedbackForm) {
  feedbackForm.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function (importantEvent) {
    modal.classList.remove('modal-container-open');
  })
}
