import {
  ADD_POSTS,
  POST_DETAIL
} from './../actions/postAction'

import {
  RETRIEVE_POST_COMMENTS
} from './../actions/commentAction'

const state = {
  posts: [],
  postDetail: {},
  comments: []
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

    case RETRIEVE_POST_COMMENTS: return {
      ...state,
      comments: action.comments.slice(0)
    }

    default: return state;
  }
}