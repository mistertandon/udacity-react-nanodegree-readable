import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import { addPosts } from './../actions/postAction'

class Post extends Component {

  componentDidMount() {

    this.props.dispatchAddPosts();
  }

  render() {

    const { post } = this.props;

    return (

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
          post.posts && post.posts.length && post.posts.map((post, index) => (

            <div key={`post_info_${index}`} className='post--container'>

              <div key={`post_title_${index}`} className='post--item--a post--item'>
                <Link to={`/postDetail/${post.id}`} >{post.title}</Link>
              </div>
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
}

/**
 * @description: `mapStateToProps` function to map state to props.
 * @param {Object} state : Global state of the react application.
 * @returns {Object} state object
 */
function mapStateToProps(state) {

  return {
    ...state,
    posts: state.post.posts
  }
}

/**
 * @description: `mapDispatchToProps` function to map actions to porps.
 * @param {Function} dispatch
 * @returns {Object} Mapped object with dispatch actions.
 */
function mapDispatchToProps(dispatch) {

  return {
    dispatchAddPosts: () => {
      dispatch(addPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);