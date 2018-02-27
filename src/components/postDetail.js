import React, { Component } from 'react'
import { connect } from 'react-redux'

import './../css/postDetail.css'

import { getPost } from './../actions/postAction'
import { getPostComments } from './../actions/commentAction'

import Comment from './../components/comment'

class PostDetail extends Component {

  componentDidMount() {

    this.props.dispatchGetPost();
  }

  render() {

    const { postDetail } = this.props.post;
    const { id } = this.props.match.params

    console.log(id);
    return (

      <div className='post--detail--container'>
        {
          postDetail && (
            <div className='post--detail'>
              <div className='post--item--key post--general'>Title</div>
              <div className='post--item--detail post--general'>{postDetail.title}</div>
              <div className='post--item--key post--general'>Author</div>
              <div className='post--item--detail post--general'>{postDetail.author}</div>
              <div className='post--item--key post--general'>Body</div>
              <div className='post--item--detail post--general'>{postDetail.body}</div>
              <div className='post--item--key post--general'>Comments count</div>
              <div className='post--item--detail post--general'>{postDetail.voteScore}</div>
              <div className='post--item--key post--general'>Last Modified Time</div>
              <div className='post--item--detail post--general'>{new Date(postDetail.timestamp).toISOString()}</div>
            </div>
          )

        }
        {
          <Comment id={id} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {

  const { id } = ownProps.match.params;

  return {
    dispatchGetPost: () => {
      dispatch(getPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);