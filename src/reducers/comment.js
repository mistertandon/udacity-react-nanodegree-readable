import {
  RETRIEVE_POST_COMMENTS,
  ADD_COMMENT
} from './../actions/commentAction'

const state = {
  comments: [],
  response_comment: {}
}

export function comment(state = {}, action) {
  console.log(state);
  switch (action.type) {

    case RETRIEVE_POST_COMMENTS: return {
      ...state,
      comments: action.comments.slice(0)
    }

    case ADD_COMMENT: return {
      ...state,
      comments: state.comments.concat([action.response_comment])
    }

    default: return state;
  }
}