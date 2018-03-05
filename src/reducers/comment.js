import sortBy from 'sort-by'

import {
  RETRIEVE_POST_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  LIKE_COMMENT,
  DELETE_COMMENT
} from './../actions/commentAction'

const state = {
  comments: [],
  commentsVoting: []
}

export function comment(state = {}, action) {

  switch (action.type) {

    case RETRIEVE_POST_COMMENTS: return {
      ...state,
      comments: action.comments.slice(0)
        .sort(sortBy('-timestamp'))
    }

    case ADD_COMMENT: return {
      ...state,
      comments: state.comments.concat([action.comments])
        .sort(sortBy('-timestamp'))
    }

    case EDIT_COMMENT: return {
      ...state,
      comments: state.comments
        .filter(
          (comment) => comment.id !== action.edited_comment.id
        )
        .concat([action.edited_comment])
        .sort(sortBy('-timestamp'))
    }

    case LIKE_COMMENT: return {
      ...state,
      comments: state.comments
        .filter(
          (comment) => comment.id !== action.comment.id
        )
        .concat([action.comment])
        .sort(sortBy(action.sortedColumn)),

      commentsVoting: typeof state.commentsVoting === 'undefined'
        ? [{ id: action.comment.id, value: action.voteType }]
        : state.commentsVoting.filter(commentPartialInfo => commentPartialInfo.id !== action.comment.id).concat(
          [
            {
              id: action.comment.id,
              value: action.voteType
            }
          ]
        )
    }

    case DELETE_COMMENT: return {
      ...state,
      comments: state.comments.filter(comment => comment.id !== action.comment.id).sort(sortBy(action.sortedColumn))
    }

    default: return state;
  }
}