import sortBy from 'sort-by'

import {
  ADD_POSTS,
  POST_DETAIL,
  ADD_POST,
  EDIT_POST,
  SORT_POSTS,
  LIKE_POST,
  DELETE_POST
} from './../actions/postAction'

import {
  RETRIEVE_POST_COMMENTS
} from './../actions/commentAction'

const state = {
  posts: [],
  postDetail: {},
  comments: [],
  postsVoting: []
}

export function post(state = {}, action) {

  switch (action.type) {

    case ADD_POSTS: return {

      ...state,
      posts: action.posts.slice(0).sort(sortBy('-timestamp')),
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

    case SORT_POSTS: return {

      ...state,
      posts: state.posts.sort(sortBy(`${action.sortOrder}${action.column}`)).slice(0)
    }

    case LIKE_POST: return {

      ...state,
      posts: state.posts.filter(post => post.id !== action.post.id).concat([action.post]).sort(sortBy(action.sortedColumn)),
      postsVoting: (typeof state.postsVoting === 'undefined')
        ? [{ id: action.post.id, value: action.voteType }]
        : state.postsVoting.filter(postPartialInfo => postPartialInfo.id !== action.post.id).concat(
          [
            {
              id: action.post.id,
              value: action.voteType
            }
          ]
        ),
      postDetail: action.post
    }

    case DELETE_POST: return {

      ...state,
      posts: state.posts.filter(post => post.id !== action.post.id).sort(sortBy(action.sortedColumn))
    }

    default: return state;
  }
}