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