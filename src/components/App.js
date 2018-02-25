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

class App extends Component {

  componentDidMount() {

    /**
     * @description: Initially mapping state to props and dispatch to
     * props.
     * Step A. Getting all the categories
     */
    API.getAllCategories()
      .then(categories => {
        // Step B. `dispatchAddCategories` action to set categories in state
        return this.props.dispatchAddCategories(categories);
      })
      .then(result => {
        // Step C. Getting all the posts
        return API.getAllPosts();
      })
      .then(posts => {
        // Step D. `dispatchAddPosts` action to set posts in state
        return this.props.dispatchAddPosts({ posts: posts });
      })
      .then(() => {

        console.log(`State and action have been mapped.`);
      });
  }

  render() {

    /**
     * Destructuring props in corresponding variable.
     */
    const { category, post } = this.props;

    return (
      <div className="app--container">

        <Route exact path='/' render={
          () =>
            (
              <div className='home--page'>
                {

                  /**
                   * Calling `Category` react component.
                   */
                  category && category.length && (<Category categories={category} />)
                }
                {
                  /**
                   * Checking `post && post.posts && post.posts.length` variable, and
                   * render post headers.
                   */
                  post && post.posts && post.posts.length && (

                    <div className='posts--container'>

                      <div className='post--container post--headers'>
                        <div className='post--item--a post--item'>Title</div>
                        <div className='post--item--a post--item'>Author</div>
                        <div className='post--item--b post--item'>Category</div>
                        <div className='post--item--c post--item'>VoteScore</div>
                        <div className='post--item--b post--item'>Timestamp</div>
                      </div>

                      {
                        /**
                         * Iterate over `post.posts`, to render available posts.
                         */
                        post.posts.map((post, index) => (
                          <div key={`post_info_${index}`} className='post--container'>

                            <div key={`post_title_${index}`} className='post--item--a post--item'>{post.title}</div>
                            <div key={`post_author_${index}`} className='post--item--a post--item'>{post.author}</div>
                            <div key={`post_category_${index}`} className='post--item--b post--item'>{post.category}</div>
                            <div key={`post_vote_score_${index}`} className='post--item--c post--item'>{post.voteScore}</div>
                            <div key={`post_timestamp_${index}`} className='post--item--b post--item'>{post.timestamp}</div>

                          </div>
                        ))
                      }
                    </div>
                  )
                }
              </div>
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
    dispatchAddCategories: (categories) => {
      dispatch(addCategories(categories))
    },
    dispatchAddPosts: (posts) => {
      dispatch(addPosts(posts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
