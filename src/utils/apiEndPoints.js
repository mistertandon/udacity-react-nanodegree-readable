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

export function addPostComment(commentObj) {

  return fetch(`${apiHost}comments`, {
    'method': 'POST',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(commentObj),
  })
    .then(response => response.json())
}

export function editPostComment(commentObject) {

  return fetch(`${apiHost}comments/${commentObject.id}`, {
    'method': 'PUT',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(commentObject)
  })
    .then(response => response.json())
}

export const addPost = (post) => {

  return fetch(`${apiHost}posts`, {
    'method': 'POST',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(post)
  })
    .then(response => response.json())
}

export const editPost = (post) => {

  return fetch(`${apiHost}posts/${post.id}`, {
    'method': 'PUT',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(post)
  })
    .then(response => response.json())
}

export const likePost = (id, voteType) => {

  return fetch(`${apiHost}posts/${id}`, {
    'method': 'POST',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({ option: voteType })
  })
    .then(response => response.json())
}

export const likeComment = (id, voteType) => {

  return fetch(`${apiHost}comments/${id}`, {
    'method': 'POST',
    'headers': {
      ...headers,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({ option: voteType })
  })
    .then(response => response.json())
}