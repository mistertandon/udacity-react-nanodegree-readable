import { RETRIEVE_POST_COMMENTS } from './../actions/commentAction'

const state = {
  comments: []
}

export function comment(state = {}, action) {

  switch (action.type) {

    case RETRIEVE_POST_COMMENTS: return {
      ...state,
      comments: action.comments.slice(0)
    }

    default: return state;
  }
}