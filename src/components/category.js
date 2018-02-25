import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Category extends Component {

  render() {

    return (

      <div className="category--container">
        {
          this.props.categories && this.props.categories.length && this.props.categories.map(
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

export default Category;