import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Link } from 'react-router-dom'

import MdAddCircle from 'react-icons/lib/md/add-circle'
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdChevronRight from 'react-icons/lib/md/chevron-right'

import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import FaHeart from 'react-icons/lib/fa/heart'
import FaHeartO from 'react-icons/lib/fa/heart-o'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

import './../css/postDetail.css'

import {
  getPost,
  likePost
} from './../actions/postAction'

import { getPostComments } from './../actions/commentAction'

import CustomThumbUp from './customThumbUp'
import CustomThumbDown from './customThumbDown'

import Comment from './../components/comment'

class PostDetail extends Component {

  iconSize = 22;

  componentDidMount() {

    this.props.dispatchGetPost();
  }

  reqPostThumbUpOrDown = (id, voteType) => {

    this.props.dispatchLikePost(id, voteType);
  }

  render() {

    const { postDetail, postsVotingMod } = this.props.post;
    const { id } = this.props.match.params

    return (

      <div className='post--detail--container'>

        <div className='post--add--new'>
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
            <MdAddCircle size={28} />
          </Link>
        </div>
        {

          postDetail && (
            <div className='post--detail'>

              <div className='post--item--vote post--detail--first--row'>
                <FaHeart />
                <MdChevronLeft size={this.iconSize} />&nbsp;
                {postDetail.voteScore}&nbsp;
                <MdChevronRight size={this.iconSize} />
              </div>
              <div className='post--item--title post--detail--first--row'>{postDetail.title}</div>
              <div className='post--item--body post--detail--second--row'>{postDetail.body}</div>
              <div className='post--item--author post--detail--third--row'>
                Written by: {postDetail.author},&nbsp;{new Date(postDetail.timestamp).toISOString()}
              </div>
              <div className='post--item--thumb--up--down post--detail--third--row'>
                <CustomThumbUp contentDetailObj={postDetail}
                  votingModObj={postsVotingMod}
                  reqThumbUpOrDownFunc={this.reqPostThumbUpOrDown}
                  iconSizeProperty={this.iconSize}
                />
              </div>
              <div className='post--item--thumb--up--down post--detail--third--row'>
                <CustomThumbDown contentDetailObj={postDetail}
                  votingModObj={postsVotingMod}
                  reqThumbUpOrDownFunc={this.reqPostThumbUpOrDown}
                  iconSizeProperty={this.iconSize}
                />
              </div>

              <div className='post--item--edit post--detail--third--row'>
                <MdEdit size={this.iconSize} />
              </div>
              <div className='post--item--delete post--detail--third--row'>
                <MdDelete size={this.iconSize} />
              </div>
            </div>
          )

        }
        {
          <Comment id={id} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  state.post.postsVotingMod = {};

  state.post.postsVoting && state.post.postsVoting.length > 0 && state.post.postsVoting.map(
    (postsVote) => {

      state.post.postsVotingMod[postsVote.id] = {
        id: postsVote.id,
        value: postsVote.value
      }
    })

  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const { id } = ownProps.match.params;

  return {
    dispatchGetPost: () => {
      dispatch(getPost(id))
    },
    dispatchLikePost: (id, voteType) => {
      dispatch(likePost(id, voteType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);