import React from 'react'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

const PostThumbUp = (props) => (

  <div>

    {
      (
        typeof props.votingModObj[props.contentDetailObj.id] === 'undefined'
          ? true
          : props.votingModObj[props.contentDetailObj.id].value === 'downVote'
      )
      &&
      (
        <MdThumbUp size={props.iconSizeProperty}
          onClick={
            () => {
              props.reqThumbUpOrDownFunc(props.contentDetailObj.id, 'upVote')
            }
          }
        />
      )
    }
    {
      typeof props.votingModObj[props.contentDetailObj.id] !== 'undefined'
      && props.votingModObj[props.contentDetailObj.id].value === 'upVote'
      &&
      (
        <TiThumbsUp size={props.iconSizeProperty} />
      )
    }

  </div>
)

export default PostThumbUp;