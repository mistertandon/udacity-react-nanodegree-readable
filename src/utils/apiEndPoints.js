const apiHost = 'http://localhost:3001/';

let token = localStorage.token;
if (!token) {
  token = 'mistertandon'
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function getAllCategories() {

  return fetch(`${apiHost}categories`, {
    'method': 'GET',
    'headers': {
      ...headers
    }
  })
    .then((response) => response.json())
}

export function getAllPosts() {

  return fetch(`${apiHost}posts`, {
    'method': 'GET',
    'headers': {
      ...headers
    }
  })
    .then(response => response.json())
}

export function getPost(id) {

  return fetch(`${apiHost}posts/${id}`, {
    'method': 'GET',
    'headers': {
      ...headers
    }
  })
    .then(response => response.json())
}

export function getPostComments(id) {

  return fetch(`${apiHost}posts/${id}/comments`, {
    'method': 'GET',
    'headers': {
      ...headers
    }
  })
    .then(response => response.json())
}