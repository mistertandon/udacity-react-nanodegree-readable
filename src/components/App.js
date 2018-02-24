import React, { Component } from 'react'
import { connect } from 'react-redux'
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

    API.getAllCategories()
      .then(categories => {

        this.props.dispatchAddCategories(categories);

        return API.getAllPosts();

      })
      .then(posts => {

        this.props.dispatchAddPosts({ posts: posts });
      });

  }

  render() {

    const { category, post } = this.props;
    console.log(post);
    return (
      <div className="app--container">
        {
          category && category.length && (<Category categories={category} />)
        }
        {
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
  }
}

function mapStateToProps(state) {

  return {
    ...state,
    category: state['category']['categories']
  }
}

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
