'use strict';

const refs = {
  openModalBtn: document.querySelector('button[data-action="open-modal"'),
  closeModalBtn: document.querySelector('button[data-action="close-modal"'),
  modalBackdrop: document.querySelector('.js-backdrop'),
  body: document.body,
};

const openModal = () => {
  refs.body.classList.add('modal-visible');
  window.addEventListener('keydown', handleKeyPress);
};

const closeModal = () => {
  refs.body.classList.remove('modal-visible');
  window.removeEventListener('keydown', handleKeyPress);
};

const handleKeyPress = e => {
  console.log(e);

  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
};

const handleBackdropClick = ({ target, currentTarget }) => {
  // target - самый глубокий элемент на котором произошло событие
  // console.log('target: ', target);
  // currentTarget - элемент на котором сработал слушатель
  // console.log('currentTarget: ', currentTarget);

  if (target !== currentTarget) {
    return;
  }

  closeModal();
};

refs.modalBackdrop.addEventListener('click', handleBackdropClick);
refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
