import model from './model';

const refs = {
  addItemBtn: document.querySelector('button[data-action="add"]')
};

model.get().then(posts => {
  console.log('Rending all list items!');
  console.log(posts);
});

refs.addItemBtn.addEventListener('click', () => {
  model
    .add({
      title: 'title',
      body: 'body',
      createdAt: new Date().toLocaleTimeString()
    })
    .then(addedItem => {
      console.log(addedItem);
    })
    .catch(error => {
      console.log(error);
    });
});

// model
//   .delete(4)
//   .then(id => {
//     console.log(`removing list item with ${id}`);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// model.update(5, { title: 'SUPER TITLE 1' }).then(updatedItem => {
//   console.log(`Ready to udpate item with id: ${updatedItem.id}`);
//   console.log(updatedItem);
// });
