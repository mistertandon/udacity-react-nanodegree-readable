import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './../App.css'
import './../css/index.css'

import { TiArrowSortedDown } from 'react-icons/lib/ti/arrow-sorted-down'
import { TiArrowSortedUp } from 'react-icons/lib/ti/arrow-sorted-up'

import API from './../utils/api'
import { addCategories } from './../actions/categoryAction'
import { addPosts } from './../actions/postAction'

import Category from './category'
import Post from './post'
import CategoryWisePosts from './categoryWisePosts'
import PostDetail from './postDetail'

class App extends Component {

  render() {

    return (
      <div className="app--container">

        <Route exact path="/" render={
          () =>
            (
              <div className='home--page'>
                {

                  /**
                   * Calling `Category` react component.
                   */
                }
                <Category />
                {
                  /**
                   * Calling `Post` react component.
                   */
                }
                <Post />
              </div>
            )
        } />

        <Route path="/category" component={CategoryWisePosts} />

        <Route path='/postDetail/:id' component={PostDetail} />

      </div>
    )
  }
}

export default App;