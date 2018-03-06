import React from 'react';

import { Link } from 'react-router-dom'
import MdEdit from 'react-icons/lib/md/edit'

const EditPostLink = (props) => (

  <Link to={
    {
      pathname: '/createPost/',
      state: {
        isAddOperation: false,
        isEditOperation: true,
        id: `${props.id}`
      }
    }
  }>
    <MdEdit size={props.iconSize} />
  </Link>
)

export default EditPostLink;