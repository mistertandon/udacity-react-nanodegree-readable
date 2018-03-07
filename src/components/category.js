import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './../css/category.css'

import { addCategories } from './../actions/categoryAction'

class Category extends Component {

  componentDidMount() {

    this.props.dispatchAddCategories();
  }

  render() {

    const { categories } = this.props.category;

    return (

      <div className="category--container">

        {
          categories && categories.length && categories.map(
            (category, index) =>
              (

                <div className='category--item'
                  key={`${index}_category`}>
                  <Link to={
                    {
                      pathname: `/${category.name}`,
                      state: {
                        activeCategory: `${category.name}`
                      }
                    }
                  }>{category.name}</Link>
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
const mapStateToProps = (state) => state

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