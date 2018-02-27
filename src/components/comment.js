import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import './../css/comment.css'
import './../css/modal.css'

import { getPostComments } from './../actions/commentAction'

const customStyles = {
  content: {
    top: '20%',
    width: '60%',
    height: '500px',
    left: '5%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(20%, -10%)'
  }
};

class Comment extends Component {

  state = {
    isCommentModalOpen: false,
    isAddOperation: true,
    isEditOperation: false,
    comment: {}
  }

  componentDidMount() {

    this.props.dispatchPostComments();
    Modal.setAppElement('body');
  }

  openCommentModalForAdd = () => {

    this.setState(() => (
      {
        isCommentModalOpen: true,
        isAddOperation: false,
        isEditOperation: false
      }
    ))
  }

  closeCommentModal = () => {

    this.setState(() => (
      {
        isCommentModalOpen: false,
        isAddOperation: false,
        isEditOperation: false
      }
    ))
  }

  render() {

    const { comments } = this.props.comment;
    const { isCommentModalOpen, isAddOperation, isEditOperation } = this.state;

    return (

      <div className='comments--container'>

        <div className='comment--header'>
          Post comments
        </div>

        {
          comments && comments.length && (
            comments.map((comment, index) => (

              <div key={`comment_wrapper_${comment.id}`}>
                <div key={`comment_container_${comment.id}`} className='comment--container'>
                  <div key={`comment_body_${comment.id}`} className='comment--body'>
                    <div key={`comment_content_${comment.id}`} className='comment--content'>{comment.body}</div>
                    <div key={`comment_actions_${comment.id}`} className='comment--actions'>
                      Edit, Delete
                    </div>
                  </div>

                  <div key={`comment_info_${comment.id}`} className='comment--info'>
                    {`By ${comment.author} at ${new Date(comment.timestamp)}`}
                  </div>
                </div>
              </div>
            ))
          )
        }
        {
          comments && comments.length === 0 && (
            <div className='comment--container'>
              No Comments found
            </div>
          )
        }

        <div className='comment--container'>
          <div className='comment--body'>
            <button className='comment--add'
              onClick={this.openCommentModalForAdd}
            >Add</button>&nbsp;new comment
          </div>
        </div>

        <Modal isOpen={isCommentModalOpen}
          class='modal'
          overlayClassName='overlay'
          onRequestClose={this.closeCommentModal}
          style={customStyles}
        >
          {
            isCommentModalOpen && (

              <div className='modalContainer'>
                <div className='modal--close'>
                  <button className='modal--close--btn'
                    onClick={this.closeCommentModal}
                  >close</button>
                </div>
                <div className='modal--header'>
                  {
                    isAddOperation && (`Add Comment`)
                  }
                  {
                    isEditOperation && (`Edit Comment`)
                  }
                </div>
                Hello Comment Modal
              </div>
            )
          }
        </Modal>

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