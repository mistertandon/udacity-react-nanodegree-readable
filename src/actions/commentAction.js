import API from './../utils/api'

export const RETRIEVE_POST_COMMENTS = 'RETRIEVE_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const getPostCommentsAction = (comments) => {

  return {
    type: RETRIEVE_POST_COMMENTS,
    comments: comments
  }
}

/**
 * @description: `getPostComments` function retrieves comments associated with
 * particular
 * @param {*} id
 */
export const getPostComments = (id) => {

  return (dispatch) => API.getPostComments(id)
    .then(comments => dispatch(getPostCommentsAction(comments)))
}


/**
 * @description: `getPostComments` function retrieves comments associated with
 * particular
 * @param {*} id
 */
export const addPostCommentAction = (resposneComment) => {

  return {
    type: ADD_COMMENT,
    response_comment: resposneComment
  }
}

/**
 * @description: `getPostComments` function retrieves comments associated with
 * particular
 * @param {*} id
 */
export const addPostComment = (commentObj) => {

  return (dispatch) => API.addPostComment(commentObj)
    .then(resComment => dispatch(addPostCommentAction(resComment)))
}