'use strict';

// const list = document.querySelector('.list');
// console.dir(list);

// const listItems = list.querySelectorAll('.item');
// console.log(listItems);

// const article = document.querySelector('.post');

// const postLink = document.querySelector('.post-link');

// console.log(article);

// const image = document.querySelector('img');
// console.dir(image.src);
// image.src =
//   'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

// const postLink = document.querySelector('.post-link');

// console.dir(postLink.classList.contains('post-link'));

// postLink.classList.add('active');

// postLink.classList.remove('active');

// document.querySelector('button').addEventListener('click', () => {
//   postLink.classList.toggle('active');
// });

// const image = document.querySelector('.post img');

// console.dir(image);

// image.width = 1000;

const post = document.querySelector('.post');

console.log(post.dataset);

post.dataset.id = 'new id!!!!!';

post.dataset.hello = 'hello';

post.setAttribute('data-hello', 'hello');

// const button = document.querySelector('.action');
// const action = button.dataset.action;

// console.log(action);
