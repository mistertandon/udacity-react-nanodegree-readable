import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../App.css'
import API from './../utils/api'
import { addCategories } from './../actions/index'

class App extends Component {

  componentDidMount() {

    API.getAllCategories()
      .then(categories => {

        this.props.dispatchAddCategories(categories);
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {

  return {
    dispatchAddCategories: (categories) => {
      console.log(categories);
      dispatch(addCategories(categories))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
