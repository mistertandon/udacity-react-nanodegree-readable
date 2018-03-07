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
                <Post activeCategory={'all'} />
              </div>
            )
        } />

        <Route exact path='/notfound' render={
          () => (

            <div>Not found</div>
          )
        }
        />

        <Route exact path='/createPost/' component={CreatePost} />
        <Route exact path='/:category(react|redux|udacity)' component={CategoryWisePosts} />
        <Route exact path='/:category/:id' component={PostDetail} />


      </div>
    )
  }
}

export default App;