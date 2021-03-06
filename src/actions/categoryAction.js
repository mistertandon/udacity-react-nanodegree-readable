import API from './../utils/api'

/**
 * `ADD_CATEGORIES` constant to hold 'ADD_CATEGORIES' value.
 */
export const ADD_CATEGORIES = 'ADD_CATEGORIES';

/**
 * @description: Action to set categories in state.
 * @param {Array of objects} categories
 */
function getCategoryAction({ categories }) {

  return {
    type: ADD_CATEGORIES,
    categories: categories
  }
}

/**
 * @description: This function is a wrapper over `getCategoryAction`
 * action.
 * @param {Array of objects} categories
 */
export function addCategories() {

  return dispatch => API.getAllCategories()
    .then(
      categories => dispatch(getCategoryAction(categories))
    )
}