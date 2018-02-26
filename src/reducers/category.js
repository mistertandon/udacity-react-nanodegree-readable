import { ADD_CATEGORIES } from './../actions/categoryAction'

/**
 * `state` stores available categories.
 */
const state = {
  categories: []
}

/**
 * @description: `category` reducer will take `state`, `action` as parameters
 * and mutate state object to store categories.
 * @param {Object} state
 * @param {Object} action
 */
export function category(state = {}, action) {

  switch (action.type) {

    case ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categories.slice(0)
      }

    default: return state
  }
}