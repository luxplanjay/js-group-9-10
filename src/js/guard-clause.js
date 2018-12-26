'use strict';

const isLoginValid = function(login) {
  // код
};

const isLoginUnique = function(allLogins, login) {
  // код
};

const addLogin = function(allLogins, login) {
  const valid = isLoginValid(login);

  if (!valid) return 'Ошибка! Логин должен быть от 4 до 16 символов';

  const unique = isLoginUnique(allLogins, login);

  if (!unique) return 'Такой логин уже используется!';

  // push новый логин
  return 'Логин успешно добавлен!';
};

addLogin(logins, 'Ajax');
