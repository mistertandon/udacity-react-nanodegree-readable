export const ADD_POSTS = 'ADD_POSTS';

export function getPosts(posts) {

  return {
    type: ADD_POSTS,
    posts
  }
}

export function addPosts({ posts }) {

  return dispatch => {

    setTimeout(
      () => {
        dispatch(getPosts(posts))
      }, 0
    )
  }
}