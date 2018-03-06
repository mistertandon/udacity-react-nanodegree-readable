import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './../App.css'
import './../css/index.css'

import Header from './header'
import Category from './category'
import Post from './post'
import CategoryWisePosts from './categoryWisePosts'
import PostDetail from './postDetail'
import CreatePost from './createPost'

class App extends Component {

  render() {

    return (
      <div className="app--container">
        <Header />
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
                <Post activeCategory={'all'}/>
              </div>
            )
        } />

        <Route exact path='/category' component={CategoryWisePosts} />

        <Route exact path='/postDetail/:id' component={PostDetail} />
        <Route exact path='/createPost/' component={CreatePost} />

      </div>
    )
  }
}

export default App;