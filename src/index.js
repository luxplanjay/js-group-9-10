import getUserLocation from './location';
import todos from './todos';

getUserLocation()
  .then(location => {
    console.log(`Location: ${location}`);
  })
  .catch(erorr => {
    console.log(erorr);
  });

const updateUI = data => console.log(data);

todos.add('item-3').then(addedItem => updateUI(addedItem));
todos.delete('item-2').then(items => updateUI(items));
