import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addCategories } from './../actions/categoryAction'

class Category extends Component {

  componentDidMount() {
    this.props.dispatchAddCategories();
  }

  render() {

    const { categories } = this.props;

    return (

      <div className="category--container">
        {
          categories && categories.length && categories.map(
            (category, index) =>
              (
                <div className='category--item'
                  key={`${index}_category`}>
                  <Link to='/category'>{category.name}</Link>
                </div>
              )
          )
        }
      </div>

    )
  }
}

/**
 * @description: `mapStateToProps` function to map state to props.
 * @param {Object} state : Global state of the react application.
 * @returns {Object} state object
 */
function mapStateToProps(state) {

  return {
    ...state,
    categories: state.category.categories,
  }
}

/**
 * @description: `mapDispatchToProps` function to map actions to porps.
 * @param {Function} dispatch
 * @returns {Object} Mapped object with dispatch actions.
 */
function mapDispatchToProps(dispatch) {

  return {
    dispatchAddCategories: () => {
      dispatch(addCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);