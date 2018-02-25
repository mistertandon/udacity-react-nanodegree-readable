import API from './../utils/api'

export const ADD_POSTS = 'ADD_POSTS';

export function getPosts(posts) {

  return {
    type: ADD_POSTS,
    posts: posts
  }
}

export function addPosts() {

  return (dispatch) => API.getAllPosts()
    .then(
      posts => dispatch(getPosts(posts))
    )
}