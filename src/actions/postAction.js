import API from './../utils/api'

export const ADD_POSTS = 'ADD_POSTS';
export const POST_DETAIL = 'POST_DETAIL';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const SORT_POSTS = 'SORT_POSTS';
export const LIKE_POST = 'LIKE_POST';
export const DELETE_POST = 'DELETE_POST';

function addPostsAction(posts) {

  return {
    type: ADD_POSTS,
    posts: posts
  }
}

export function addPosts() {

  return (dispatch) => API.getAllPosts()
    .then(posts => dispatch(addPostsAction(posts)))
}

export const getPostAction = (postDetail) => {

  return {
    type: POST_DETAIL,
    postDetail: postDetail
  }
}

export const getPost = (id) => {

  return (dispatch) => API.getPost(id)
    .then(
      postDetail => dispatch(getPostAction(postDetail)),
      err => dispatch(getPostAction(err))
    )
}

export const addPostAction = (post) => {

  return {
    type: ADD_POST,
    added_post: post
  }
}

export const addPost = (post) => {

  return dispatch => API.addPost(post)
    .then(responsePost => dispatch(addPostAction(responsePost)))
}

export const editPostAction = (post) => {

  return {
    type: EDIT_POST,
    edited_post: post
  }
}

export const editPost = (post) => {

  return dispatch => API.editPost(post)
    .then(responsePost => dispatch(editPostAction(responsePost)))
}

export const sortPosts = (sortOrder, column) => (
  {
    type: SORT_POSTS,
    sortOrder: sortOrder,
    column: column
  }
)

export const likePostAction = (post, voteType, sortedColumn) => {

  return {
    type: LIKE_POST,
    post: post,
    voteType: voteType,
    sortedColumn: sortedColumn
  }
}

export const likePost = (id, voteType, sortedColumn = '-timestamp') => {

  return dispatch => API.likePost(id, voteType)
    .then(response => dispatch(likePostAction(response, voteType, sortedColumn)))
}

export const deletePostAction = (post, sortedColumn) => (
  {
    type: DELETE_POST,
    post: post,
    sortedColumn: sortedColumn
  }
)



export const deletePost = (id, sortedColumn = '-timestamp') => {

  return dispatch => API.deletePost(id)
    .then(responsePost => dispatch(deletePostAction(responsePost, sortedColumn)))
}