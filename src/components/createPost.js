import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import serializeForm from 'form-serialize'

import './../css/createPost.css'

import {
  addPost,
  editPost
} from './../actions/postAction'

class CreatePost extends Component {

  state = {
    postDetail: {}
  }

  componentDidMount() {

    const { isEditOperation, id } = this.props.location.state;
    const { posts } = this.props.post;

    isEditOperation && this.setState(() => ({ postDetail: posts.filter(post => post.id === id)[0] }))
  }

  getStatePropertyPathValue = (...path) => {

    return path.reduce((mutatedState, currentProperty) => mutatedState[currentProperty] ? mutatedState[currentProperty] : null, this.state);
  }

  handlePostAddRequest = (event) => {

    event.preventDefault();
    const formObj = serializeForm(event.target, { hash: true });

    const post = Object.assign(formObj, {
      id: uuid(),
      timestamp: Date.now()
    });

    this.props.dispacthAddPost(post);
  }

  handlePostEditRequest = (event) => {

    event.preventDefault();
    const formObj = serializeForm(event.target, { hash: true });

    this.props.dispacthEditPost(formObj);
  }

  render() {

    const { categories } = this.props.category;
    const { isAddOperation, isEditOperation } = this.props.location.state;
    const { posts } = this.props.post;

    return (

      <div className='create--post--container' >
        {
          isAddOperation && (
            <div className='create--post--heading'>
              Add App
            </div>
          )
        }
        {
          isEditOperation && (
            <div className='create--post--heading'>
              Edit Post
            </div>
          )
        }

        <form onSubmit={
          (event) => {

            isAddOperation && this.handlePostAddRequest(event);
            isEditOperation && this.handlePostEditRequest(event);
          }
        }>
          {
            isEditOperation && (
              <input type='hidden'
                name='id'
                key={this.getStatePropertyPathValue('postDetail', 'id')}
                defaultValue={this.getStatePropertyPathValue('postDetail', 'id')}
              />
            )
          }
          <div className='post--title--general'>
            Title
          </div>

          <div className='post--form--field--wrapper'>
            <input type='text'
              name='title'
              className='post--form--field--general'
              id='post--title'
              placeholder='Post Title'
              key={this.getStatePropertyPathValue('postDetail', 'title')}
              defaultValue={this.getStatePropertyPathValue('postDetail', 'title')}
            />
          </div>
          <div className='post--title--general'>
            Body
          </div>
          <div className='post--form--field--wrapper'>
            <textarea name='body'
              id='post--body'
              className='post--form--field--general post--body--field'
              placeholder='Post Body'
              key={this.getStatePropertyPathValue('postDetail', 'body')}
              defaultValue={this.getStatePropertyPathValue('postDetail', 'body')}
            >
            </textarea>
          </div>
          <div className='post--title--general'>
            Author
          </div>
          <div className='post--form--field--wrapper'>
            <input type='text'
              name='author'
              className='post--form--field--general'
              id='post--author'
              readOnly={isEditOperation}
              key={this.getStatePropertyPathValue('postDetail', 'author')}
              defaultValue={this.getStatePropertyPathValue('postDetail', 'author')}
            />
          </div>
          <div className='post--title--general'>
            Category
          </div>
          <div className='post--form--field--wrapper'>
            <select name='category'
              key={this.getStatePropertyPathValue('postDetail', 'category')}
              defaultValue={this.getStatePropertyPathValue('postDetail', 'category')}
              className='post--form--field--general post--category--field'>
              {
                isAddOperation && categories && categories.length && categories.map((category) => (

                  <option key={`category_${category.name}`} value={category.name}>{category.name}</option>
                ))
              }
              {
                isEditOperation && categories && categories.length && categories.map((category) => (

                  <option key={`category_${category.name}`}
                    disabled={category.name !== this.getStatePropertyPathValue('postDetail', 'category')}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='post--form--field--wrapper'>
            <input type='submit'
              className='post--form--field--general'
              id='post--submit'
            />
          </div>
        </form>

      </div >
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {

  return {
    dispacthAddPost: (post) => {
      dispatch(addPost(post))
    },
    dispacthEditPost: (post) => {
      dispatch(editPost(post))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);