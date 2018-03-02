import {
  ADD_POSTS,
  POST_DETAIL,
  ADD_POST,
  EDIT_POST
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

    case ADD_POST: return {
      ...state,
      posts: state.posts.concat([action.added_post])
    }

    case EDIT_POST: return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.edited_post.id).concat([action.edited_post])
    }

    default: return state;
  }
}