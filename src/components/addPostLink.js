import React from 'react'
import { Link } from 'react-router-dom'

import MdAddCircle from 'react-icons/lib/md/add-circle'

const AddPostLink = (props) => (
  <Link to={
    {
      pathname: '/createPost',
      state: {
        isAddOperation: true,
        isEditOperation: false,
        id: ''
      }
    }
  }
  >
    <MdAddCircle size={props.iconSize} />
  </Link>
)

export default AddPostLink;