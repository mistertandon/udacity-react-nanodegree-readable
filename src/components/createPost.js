import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import serializeForm from 'form-serialize'

import './../css/createPost.css'

import { addPost } from './../actions/postAction'

class CreatePost extends Component {

  handlePostAddRequest = (event) => {

    event.preventDefault();
    const formObj = serializeForm(event.target, { hash: true });

    const post = Object.assign(formObj, {
      id: uuid(),
      timestamp: Date.now()
    });

    this.props.dispacthAddPost(post);
  }

  render() {

    const { categories } = this.props;

    return (

      <div className='create--post--container'>

        <form onSubmit={this.handlePostAddRequest}>

          <div className='post--title--general'>
            Title
          </div>
          <div className='post--form--field--wrapper'>
            <input type='text'
              name='title'
              className='post--form--field--general'
              id='post--title'
              placeholder='Post Title' />
          </div>
          <div className='post--title--general'>
            Body
          </div>
          <div className='post--form--field--wrapper'>
            <textarea name='body'
              id='post--body'
              className='post--form--field--general post--body--field'
              placeholder='Post Body'
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
              placeholder='Post Author' />
          </div>
          <div className='post--title--general'>
            Category
          </div>
          <div className='post--form--field--wrapper'>
            <select name='category'
              className='post--form--field--general post--category--field'>
              {
                categories && categories.length && categories.map((category) => (

                  <option key={`category_${category.name}`} value={category.name}>{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className='post--form--field--wrapper'>
            <input type='submit'
              className='post--form--field--general'
              id='post--submit' />
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => state.category

const mapDispatchToProps = (dispatch) => {

  return {
    dispacthAddPost: (post) => {
      dispatch(addPost(post))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);