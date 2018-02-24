export const ADD_POSTS = 'ADD_POSTS';

export function addPosts({ posts }) {

  return {
    type: ADD_POSTS,
    posts
  }

}