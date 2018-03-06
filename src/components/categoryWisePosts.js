import React, { Component } from 'react'

import './../css/categoryWise.css'

import Post from './post'
import PostGridLink from './postGridLink'

class CategoryWisePosts extends Component {

  render() {

    const { activeCategory } = this.props.location.state;

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

export default CategoryWisePosts;