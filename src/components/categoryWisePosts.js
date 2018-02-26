import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import './../css/categoryWise.css'

import { addCategories } from './../actions/categoryAction'
import { addPosts } from './../actions/postAction'
import Post from './post'

class CategoryWisePosts extends Component {

  componentDidMount() {

    this.props.dispatchAddCategories();
    this.props.dispatchAddPosts();
  }

  state = {
    activeCategory: 'react'
  }

  render() {

    const { activeCategory } = this.state;
    const { categories, posts } = this.props;
    var post = [];

    // if (this.props.post && this.props.post.length) {

    //   post = this.props.post.filter(post => post.category === activeCategory);
    // }

    return (
      <div className='category--page'>
        <div className='category--title'>
          {activeCategory}
        </div>
        {
          // post && post.length && (<Post posts={post} />)
        }

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
    categories: Object.assign({}, state.category.categories),
    posts: Object.assign({}, state.post.posts)
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