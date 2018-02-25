/**
 * `ADD_CATEGORIES` constant to hold 'ADD_CATEGORIES' value.
 */
export const ADD_CATEGORIES = 'ADD_CATEGORIES';

/**
 * @description: Action to set categories in state.
 * @param {*} categories
 */
function getCategoryAction(categories) {

  return {
    type: ADD_CATEGORIES,
    categories
  }
}

/**
 * @description: This function is a wrapper over `getCategoryAction`
 * action.
 *
 * @param {Array ob objects} categories
 */
export function addCategories({ categories }) {

  return (dispatch) => setTimeout(
    () => {
      dispatch(getCategoryAction(categories))
    }, 0
  )
}