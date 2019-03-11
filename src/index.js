const getImages = query => {
  return fetch(
    `https://pixabay.com/api/?key=5837779-ac3ba737206b541ae294f1119&q=${query}&image_type=photo`
  ).then(response => response.json());
};

getImages('dog').then(console.log);

// const postToAdd = {
//   userId: 10,
//   title: 'My title',
//   body: 'My body'
// };

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(postToAdd)
// };

// fetch(url, options)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error('Error while fetching data: ' + response.statusText);
//   })
//   .then(savedPost => {
//     console.log(savedPost);
//   })
//   .catch(error => console.log(error));
