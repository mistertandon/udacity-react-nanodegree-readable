import React from 'react'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

const PostThumbUp = (props) => (

  <div className='post--item--thumb--up--down post--detail--third--row'>

    {
      (
        typeof props.postsVotingModObj[props.postDetailObj.id] === 'undefined'
          ? true
          : props.postsVotingModObj[props.postDetailObj.id].value === 'upVote'
      )
      &&
      (
        <MdThumbDown size={props.iconSizeProperty}
          onClick={
            () => {
              props.reqPostThumbUpOrDownFunc(props.postDetailObj.id, 'downVote')
            }
          }
        />
      )
    }
    {
      typeof props.postsVotingModObj[props.postDetailObj.id] !== 'undefined'
      && props.postsVotingModObj[props.postDetailObj.id].value === 'downVote'
      &&
      (
        <TiThumbsDown size={props.iconSizeProperty} />
      )
    }

  </div>
)

export default PostThumbUp;