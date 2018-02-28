import API from './../utils/api'

export const RETRIEVE_POST_COMMENTS = 'RETRIEVE_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const getPostCommentsAction = (comments) => {

  return {
    type: RETRIEVE_POST_COMMENTS,
    comments: comments
  }
}

/**
 * @description: `getPostComments` function retrieves comments associated with
 * particular
 * @param {number} id
 */
export const getPostComments = (id) => {

  return (dispatch) => API.getPostComments(id)
    .then(comments => dispatch(getPostCommentsAction(comments)))
}


/**
 * @description: `addPostCommentAction` function add comment to post
 * @param {Object} resposneComment
 * @returns {Object}  `ADD_COMMENT` type action object.
 */
export const addPostCommentAction = (resposneComment) => {

  return {
    type: ADD_COMMENT,
    response_comment: resposneComment
  }
}

/**
 * @description: `addPostComment` function recieves add comment
 * request for post and dispatch respective action.
 * @param {Object} Comment Object
 * @returns {Object} Dsipacther function for `ADD_COMMENT` type action
 */
export const addPostComment = (commentObj) => {

  return (dispatch) => API.addPostComment(commentObj)
    .then(resComment => dispatch(addPostCommentAction(resComment)))
}

/**
 * @description: `editPostCommentAction` function return `EDIT_COMMENT`
 * type action object
 * @param {Object} commentObject
 * @returns {Object} `EDIT_COMMENT` type action object
 */
export const editPostCommentAction = (commentObject) => {

  return {
    type: EDIT_COMMENT,
    edited_comment: commentObject
  }
}

export const editPostComment = (commentObject) => {

  return (dispatch) => API.editPostComment(commentObject)
    .then(responseComment => dispatch(editPostCommentAction(responseComment)))
}