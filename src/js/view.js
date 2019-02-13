import { buttonActions } from './utils/constants';

export const createListItem = ({ id, body }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.dataset.id = id;

  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = body;

  const actionsContainer = document.createElement('div');
  actionsContainer.classList.add('actions');

  const editButton = document.createElement('button');
  editButton.classList.add('btn');
  editButton.textContent = 'Edit';
  editButton.dataset.action = buttonActions.EDIT;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn');
  deleteButton.textContent = 'Delete';
  deleteButton.dataset.action = buttonActions.DELETE;

  actionsContainer.append(editButton, deleteButton);
  listItem.append(text, actionsContainer);

  return listItem;
};

export const renderListItems = (listRef, items) => {
  const listItems = items.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};

export const addItemToList = (listRef, item) => {
  const listItem = createListItem(item);

  listRef.appendChild(listItem);
};

export const getRefs = () => ({
  list: document.querySelector('.list'),
  editor: document.querySelector('.editor'),
  filter: document.querySelector('.filter'),
});
