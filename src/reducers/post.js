import {
  ADD_POSTS,
  POST_DETAIL
} from './../actions/postAction'

const state = {
  posts: [],
  postDetail: {}
}

export function post(state = {}, action) {

  switch (action.type) {

    case ADD_POSTS: return {
      ...state,
      posts: action.posts.slice(0)
    }

    case POST_DETAIL: return {
      ...state,
      postDetail: Object.assign({}, action.postDetail)
    }

    default: return state;
  }
}