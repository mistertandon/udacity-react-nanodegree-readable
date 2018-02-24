import { ADD_CATEGORIES } from './../actions/index.js'

const state = {
  'categories': []
}

export function category(state = {}, action) {

  switch (action.type) {

    case ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }

    default: return state
  }
}