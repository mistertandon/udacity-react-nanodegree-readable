import React from 'react'

import MdThumbDown from 'react-icons/lib/md/thumb-down'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

const CustomThumbDown = (props) => (

  <div>
    {
      (
        typeof props.votingModObj[props.contentDetailObj.id] === 'undefined'
          ? true
          : props.votingModObj[props.contentDetailObj.id].value === 'upVote'
      )
      &&
      (
        <MdThumbDown size={props.iconSizeProperty}
          onClick={
            () => {
              props.reqThumbUpOrDownFunc(props.contentDetailObj.id, 'downVote')
            }
          }
        />
      )
    }
    {
      typeof props.votingModObj[props.contentDetailObj.id] !== 'undefined'
      && props.votingModObj[props.contentDetailObj.id].value === 'downVote'
      &&
      (
        <TiThumbsDown size={props.iconSizeProperty} />
      )
    }

  </div>
)

export default CustomThumbDown;