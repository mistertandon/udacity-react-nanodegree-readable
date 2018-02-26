import API from './../utils/api'

export const ADD_POSTS = 'ADD_POSTS';
export const POST_DETAIL = 'POST_DETAIL';

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
    .then(postDetail => dispatch(getPostAction(postDetail)))
}