import React from 'react'
import { Route, Link } from 'react-router-dom'

const Category = (props) => (

  <div className="category--container">
    {
      props.categories && props.categories.length && props.categories.map(
        (category, index) =>
          (
            <div className='category--item'
              key={`${index}_category`}>
              <Link to='category'>{category.name}</Link>
            </div>
          )
      )
    }
  </div>

)

export default Category;