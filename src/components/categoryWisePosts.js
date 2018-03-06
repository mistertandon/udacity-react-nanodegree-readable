import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import './../css/categoryWise.css'

import { addCategories } from './../actions/categoryAction'
import { addPosts } from './../actions/postAction'
import Post from './post'
import PostGridLink from './postGridLink'

class CategoryWisePosts extends Component {


  render() {

    const { activeCategory } = this.props.location.state;
    const posts = [];
    return (
      <div className='category--page'>
        <div className='category--title'>
          <PostGridLink />
        </div>
        <div className='category--title'>
          {activeCategory}
        </div>

        <Post activeCategory={activeCategory} />

      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryWisePosts)
export default CategoryWisePosts;