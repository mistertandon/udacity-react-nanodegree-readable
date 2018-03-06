import React from 'react'
import { Link } from 'react-router-dom'

import MdKeyboardBackspace from 'react-icons/lib/md/keyboard-backspace'

const PostGridLink = () => (

  <div>
    <Link to='/'><MdKeyboardBackspace /></Link>
    &nbsp;Go back
  </div>
)

export default PostGridLink;