import { ADD_POSTS } from './../actions/postAction'

const state = {
  post: []
}

export function post(state = {}, action) {

  switch (action.type) {

    case ADD_POSTS: return {
      ...state,
      post: action.posts
    }

    default: return state;
  }
}