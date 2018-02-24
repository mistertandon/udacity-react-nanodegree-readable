import React from 'react'

const Category = (props) => (

  <div className="category--container">
    {

      props.categories && props.categories.length && props.categories.map((category, index) => (
        <div key={`${index}_category`}
          className="category--item">{category.name}</div>
      ))
    }
  </div>

)

export default Category;