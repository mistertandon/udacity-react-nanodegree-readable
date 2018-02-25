import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import { addCategories } from './../actions/categoryAction'
import { addPosts } from './../actions/postAction'

class CategoryWisePosts extends Component {

  render() {

    return (<div>categoryWisePosts</div>)
  }
}

/**
 * @description: `mapStateToProps` function to map state to props.
 * @param {Object} state : Global state of the react application.
 * @returns {Object} state object
 */
function mapStateToProps(state) {
  console.log(state);
  return {
    ...state,
    categories: state['category']['categories'],
    posts: state['post']['posts']
  }
}

/**
 * @description: `mapDispatchToProps` function to map actions to porps.
 * @param {Function} dispatch
 * @returns {Object} Mapped object with dispatch actions.
 */
function mapDispatchToProps(dispatch) {

  return {
    dispatchAddCategories: () => {
      dispatch(addCategories())
    },
    dispatchAddPosts: () => {
      dispatch(addPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryWisePosts)