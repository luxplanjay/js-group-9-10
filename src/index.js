import Notyf from 'notyf';
import Micromodal from 'micromodal';
import { buttonActions } from './js/utils/constants';
import Model from './js/model';
import initialNotes from './initial-notes.json';
import {
  getRefs,
  renderListItems,
  addItemToList,
  removeListItem,
  findParentListItem,
} from './js/view';
import './css/styles.css';
import './css/micromodal.css';
import 'notyf/dist/notyf.min.css';

const model = new Model(initialNotes);
const refs = getRefs();
const notyf = new Notyf();

// Handlers
const handleEditorSubmit = event => {
  event.preventDefault();

  const [input] = event.currentTarget.elements;
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    return notyf.alert('Ты ничего не ввел!');
  }

  const savedItem = model.save(inputValue);

  addItemToList(refs.list, savedItem);

  notyf.confirm('Todo успешно добавлено!');
  Micromodal.close('note-editor-modal');

  event.currentTarget.reset();
};

const handleFilterChange = event => {
  const filteredItems = model.filter(event.target.value);

  renderListItems(refs.list, filteredItems);
};

const handleListClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') return;

  const action = target.dataset.action;

  switch (action) {
    case buttonActions.DELETE:
      console.log('delete');
      const listItem = findParentListItem(target);
      const todoId = listItem.dataset.id;

      model.delete(todoId);
      removeListItem(listItem);
      break;

    case buttonActions.EDIT:
      console.log('edit');
      break;

    default:
      console.log('invalid action!');
  }
};

const handleOpenEditor = () => {
  Micromodal.show('note-editor-modal');
};

renderListItems(refs.list, model.items);

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);
refs.openEditorModalBtn.addEventListener('click', handleOpenEditor);
