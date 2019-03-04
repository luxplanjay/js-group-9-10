import storage from './storage';

const form = document.querySelector('.post-form');
const [textarea] = form.elements;

const postMessage = storage.load('feedback-post');

if (postMessage) {
  textarea.value = postMessage;
}

form.addEventListener('keyup', e => {
  console.log(textarea.value);

  storage.save('feedback-post', textarea.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.removeItem('feedback-post');

  e.currentTarget.reset();
});
