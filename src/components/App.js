import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import './../App.css'
import './../css/index.css'

import { TiArrowSortedDown } from 'react-icons/lib/ti/arrow-sorted-down'
import { TiArrowSortedUp } from 'react-icons/lib/ti/arrow-sorted-up'

import API from './../utils/api'
import { addCategories } from './../actions/categoryAction'
import { addPosts } from './../actions/postAction'

import Category from './category'
import Post from './post'

class App extends Component {

  componentDidMount() {

    this.props.dispatchAddCategories();
    this.props.dispatchAddPosts();
  }

  render() {

    /**
     * Destructuring props in corresponding variable.
     */
    const { category, post } = this.props;

    return (
      <div className="app--container">

        <Route exact path="/" render={
          () =>
            (
              <div className='home--page'>
                {

                  /**
                   * Calling `Category` react component.
                   */
                  category && category.categories && category.categories.length && (<Category categories={category.categories} />)
                }
                {
                  /**
                   * Checking `post && post.posts && post.posts.length` variable, and
                   * render post headers.
                   */
                  post && post.posts && post.posts.length && (<Post posts={post.posts} />)
                }
              </div>
            )
        } />

        <Route path="/category" render={
          () => (
            <div>Hello</div>
          )
        } />

      </div>
    )
  }
}

/**
 * @description: `mapStateToProps` function to map state to props.
 * @param {Object} state : Global state of the react application.
 * @returns {Object} state object
 */
function mapStateToProps(state) {

  return {
    ...state,
    category: state['category']['categories']
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
