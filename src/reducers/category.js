import { ADD_CATEGORIES } from './../actions/categoryAction'

const state = {
  category: []
}

export function category(state = {}, action) {

  switch (action.type) {

    case ADD_CATEGORIES:
      return {
        ...state,
        category: action.categories
      }

    default: return state
  }
}