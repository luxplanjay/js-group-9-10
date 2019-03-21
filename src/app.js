import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const getTodo = async id => {
  try {
    const response = await axios.get(`users/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const udpateTodoUI = async () => {
  try {
    const todo = await getTodo(1);
    console.log(todo);
    // Отрисовка интерфейса
  } catch (error) {
    // Отрисовать ошибку
  }
};

udpateTodoUI();
