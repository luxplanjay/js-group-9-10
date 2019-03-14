const URL = 'http://localhost:3000/posts';

export const getPosts = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching' + response.statusText);
  });
};

export const savePost = post => {
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  };

  return fetch(URL, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching ' + response.statusText);
  });
};

export const deletePost = id => {
  const opts = {
    method: 'DELETE'
  };

  return fetch(`${URL}/${id}`, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching ' + response.statusText);
  });
};

export const updatePost = (id, post) => {
  const opts = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  };

  return fetch(`${URL}/${id}`, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching ' + response.statusText);
  });
};
