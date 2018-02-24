import { ADD_CATEGORIES } from './../actions/categoryAction'

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