'use strict';

const buttonActions = {
  EDIT: 'edit',
  DELETE: 'delete',
};

const data = [
  {
    id: 'id-1',
    body:
      'Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Fusce ac felis sit amet ligula pharetra condimentum. Phasellus dolor.',
  },
  {
    id: 'id-2',
    body:
      'Ut id nisl quis enim dignissim sagittis. Quisque malesuada placerat nisl. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.',
  },
  {
    id: 'id-3',
    body:
      'Quisque malesuada placerat nisl. Fusce convallis metus id felis luctus adipiscing.',
  },
];

class Model {
  static generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  constructor(items = []) {
    this._items = items;
  }

  save(text) {
    const newItem = {
      id: Model.generateUniqueId(),
      body: text,
    };

    this._items.push(newItem);

    return newItem;
  }

  filter(query = '') {
    return this._items.filter(item =>
      item.body.toLowerCase().includes(query.toLowerCase()),
    );
  }
}

const model = new Model(data);

// Refs
const refs = {
  list: document.querySelector('.list'),
  editor: document.querySelector('.editor'),
  filter: document.querySelector('.filter'),
};

// UI
const createListItem = ({ id, body }) => {
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

const renderListItems = (listRef, items) => {
  const listItems = items.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};

const addItemToList = (listRef, item) => {
  const listItem = createListItem(item);

  listRef.appendChild(listItem);
};

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

renderListItems(refs.list, data);

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
