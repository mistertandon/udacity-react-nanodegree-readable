import { ADD_POSTS } from './../actions/postAction'

const state = {
  'posts': []
}

export function post(state = {}, action) {

  switch (action.type) {

    case ADD_POSTS: return {
      ...state,
      'posts': action.posts
    }

    default: return state;
  }
}