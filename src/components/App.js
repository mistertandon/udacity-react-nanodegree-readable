import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../App.css'
import './../css/index.css'

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

    const { category } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <div className="category--container">
          {
            category && category.length && category.map((category, index) => (
              <div key={`${index}_category`}
                className="category--item">{category.name}</div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    ...state,
    category: state['category']['categories']
  }
}

function mapDispatchToProps(dispatch) {

  return {
    dispatchAddCategories: (categories) => {
      dispatch(addCategories(categories))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
