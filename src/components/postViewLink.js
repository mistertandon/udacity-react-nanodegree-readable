import React from 'react';
import { Link } from 'react-router-dom'

import FaEye from 'react-icons/lib/fa/eye'

const PostViewLink = (props) => (
  <Link to={`/${props.category}/${props.id}`} >
    <FaEye size={props.iconSize} />
  </Link>
)

export default PostViewLink;