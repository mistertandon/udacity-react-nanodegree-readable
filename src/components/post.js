import React, { Component } from 'react'

class Post extends Component {

  render() {

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
          this.props.posts.map((post, index) => (
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
}

export default Post;