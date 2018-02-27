import React, { Component } from 'react'
import { connect } from 'react-redux'

import './../css/comment.css'

import { getPostComments } from './../actions/commentAction'

class Comment extends Component {

  componentDidMount() {

    this.props.dispatchPostComments();
  }

  render() {

    const { comments } = this.props.comment;

    return (
      <div className='comments--container'>
        <div className='comment--header'>
            Post comments
        </div>
        {
          comments && comments.length && (
            comments.map((comment, index) => (
              <div>
                <div className='comment--container'>
                  <div className='comment--body'>
                    <div className='comment--content'>{comment.body}</div>
                    <div className='comment--actions'>
                      Edit, Delete
                    </div>
                  </div>

                  <div className='comment--info'>
                    {`By ${comment.author} at ${new Date(comment.timestamp)}`}
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {

  const { id } = ownProps;

  return {

    dispatchPostComments: () => {
      dispatch(getPostComments(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);