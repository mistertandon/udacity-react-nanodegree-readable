import React from 'react'

import './../css/notFound.css'
import PostGridLink from './postGridLink'

const NotFound = () => (
  <div className='not--found--container'>
    <div>
      <PostGridLink />
    </div>
    <div className='not--found--content'>
      Sorry, requested page is unavailable.
  </div>
  </div>
)

export default NotFound;