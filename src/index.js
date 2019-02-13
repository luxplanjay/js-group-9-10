import { buttonActions } from './js/utils/constants';
import Model from './js/model';
import initialNotes from './initial-notes.json';
import { getRefs, renderListItems, addItemToList } from './js/view';

import './css/styles.css';

const model = new Model(initialNotes);
const refs = getRefs();

// Handlers
const handleEditorSubmit = event => {
  event.preventDefault();

  const [input] = event.currentTarget.elements;
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    return alert('Ты ничего не ввел!');
  }

  const savedItem = model.save(inputValue);

  addItemToList(refs.list, savedItem);

  event.currentTarget.reset();
};

const handleFilterChange = event => {
  console.log(event.target.value);

  const filteredItems = model.filter(event.target.value);

  renderListItems(refs.list, filteredItems);
};

const removeListItem = element => {
  const parentListItem = element.closest('.list-item');
  const id = parentListItem.dataset.id;

  model.delete(id);
  parentListItem.remove();
};

const handleListClick = ({ target }) => {
  // console.log(event.target);
  // console.log(event.target.nodeName);

  if (target.nodeName !== 'BUTTON') return;

  const action = target.dataset.action;

  switch (action) {
    case buttonActions.DELETE:
      console.log('delete');
      removeListItem(target);
      break;

    case buttonActions.EDIT:
      console.log('edit');
      break;

    default:
      console.log('invalid action!');
  }
};

renderListItems(refs.list, model.items);

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);
