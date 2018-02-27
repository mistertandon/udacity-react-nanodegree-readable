import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
import uuid from 'uuid'
import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'

import './../css/comment.css'
import './../css/modal.css'

import {
  getPostComments,
  addPostComment
} from './../actions/commentAction'

const customStyles = {
  content: {
    top: '27%',
    width: '50%',
    height: '400px',
    left: '12%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(20%, -10%)'
  }
};

class Comment extends Component {

  state = {
    isCommentModalOpen: false,
    isAddOperation: false,
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
        isAddOperation: true,
        isEditOperation: false
      }
    ))
  }

  openCommentModalForEdit = (comment) => {

    this.setState(() => (
      {
        isCommentModalOpen: true,
        isAddOperation: false,
        isEditOperation: true,
        comment: Object.assign({}, comment)
      }
    ))
  }

  closeCommentModal = () => {

    this.setState(() => (
      {
        isCommentModalOpen: false,
        isAddOperation: false,
        isEditOperation: false,
        comment: {}
      }
    ))
  }

  handleAddCommentAction = (event) => {

    event.preventDefault();

    const value = serializeForm(event.target, { hash: true });

    const commentObj = Object.assign(value, {
      id: uuid(),
      parentId: this.props.id,
      timestamp: Date.now()
    });

    this.state.isAddOperation && this.props.dispactAddPostComment(commentObj);
    this.closeCommentModal();
  }

  handleEditCommentRequest = (event) => {

    event.preventDefault();

    const value = serializeForm(event.target, { hash: true });

    this.state.isEditOperation && this.props.dispactEditPostComment(value);
    this.closeCommentModal();
  }

  render() {

    const { comments } = this.props.comment;
    const { isCommentModalOpen, isAddOperation, isEditOperation, comment } = this.state;

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
                      <MdEdit onClick={
                        () => {
                          this.openCommentModalForEdit(comment)
                        }
                      }
                        size={22}
                      />

                      <MdDelete onClick={
                        () => {
                          this.setState(() => ({ comment: comment }))
                        }
                      }
                        size={22}
                      />
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

        <div className='comment--add--container'>
          <button className='comment--add'
            onClick={this.openCommentModalForAdd}
          >
            Add
          </button>&nbsp;new comment
        </div>

        <Modal isOpen={isCommentModalOpen}
          class='modal'
          overlayClassName='overlay'
          onRequestClose={this.closeCommentModal}
          style={customStyles}
        >
          {
            isCommentModalOpen && (

              <div className='modal--container'>

                <div className='modal--close'>
                  <button className='modal--close--btn'
                    onClick={this.closeCommentModal}
                  >
                    close
                  </button>
                </div>

                <div className='modal--header'>
                  {
                    isAddOperation && (`Add Comment`)
                  }
                  {
                    isEditOperation && (`Edit Comment`)
                  }
                </div>

                <form onSubmit={(event) => {

                  isAddOperation && this.handleAddCommentAction(event);
                  isEditOperation && this.handleEditCommentRequest(event);
                }}>
                  <input type='hidden'
                    name='id'
                    id='comment-uuid'
                    defaultValue={comment.id ? comment.id : ''}
                  />

                  <div className='modal--comment--author--title'>
                    Author
                  </div>
                  <div className='modal--comment--author--input'>
                    <input type='text'
                      name='author'
                      id='comment-title'
                      placeholder='Enter comment title'
                      defaultValue={comment.author ? comment.author : ''}
                    />
                  </div>
                  <div className='modal--comment--body--title'>
                    Body
                  </div>
                  <div className='modal--comment--body--input'>
                    <textarea name='body'
                      id='comment-body'
                      placeholder='Enter comment body'
                      defaultValue={comment.body ? comment.body : ''}
                    >
                    </textarea>
                  </div>
                  <div className='modal--comment--submit'>
                    <input type='submit' name='commentSubmit' />
                  </div>
                </form>

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
    },
    dispactAddPostComment: (commentObj) => {
      dispatch(addPostComment(commentObj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);