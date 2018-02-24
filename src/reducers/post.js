const state = {
  'posts': []
}

export function post(state = {}, action) {

  switch (action.type) {

    case 'GET_CATEGORY_POST': return {
      ...state,
      'posts': action.posts
    }

    default: return state;
  }
}