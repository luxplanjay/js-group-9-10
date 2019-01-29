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

const renderListItems = (listRef, data) => {
  const listItems = data.map(item => createListItem(item));

  listRef.append(...listItems);
};

const list = document.querySelector('.list');

renderListItems(list, data);

{
  // Fragment
  // const fragment = document.createDocumentFragment();
  // console.log(fragment);
  // for (let i = 0; i < 10; i += 1) {
  //   const item = document.createElement('li');
  //   item.textContent = `Item ${i}`;
  //   fragment.appendChild(item);
  // }
  // list.appendChild(fragment);
}

// console.log(list.innerHTML);
// list.innerHTML = '';

{
  // insertAdjacentHTML
  // const createListItemMarkup = ({ id, body }) => {
  //   const markup = `
  //   <li class="list-item" data-id="${id}">
  //     <p class="text">${body}</p>
  //     <div class="actions">
  //       <button class="btn" data-action="${buttonActions.EDIT}">Edit</button>
  //       <button class="btn" data-action="${buttonActions.DELETE}">Delete</button>
  //     </div>
  //   </li>`;
  //   return markup;
  // };
  // const renderListItemsMarkup = data => {
  //   // const markup = data.map(item => createListItemMarkup(item)).join('');
  //   const markup = data.reduce(
  //     (html, item) => html + createListItemMarkup(item),
  //     '',
  //   );
  //   list.insertAdjacentHTML('beforeend', markup);
  // };
  // renderListItemsMarkup(data);
}
