import React, { Component } from 'react'
import { connect } from 'react-redux'

import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdDelete from 'react-icons/lib/md/delete'
import FaHeart from 'react-icons/lib/fa/heart'

import './../css/postDetail.css'

import {
  getPost,
  likePost,
  deletePost
} from './../actions/postAction'

import CustomThumbUp from './customThumbUp'
import CustomThumbDown from './customThumbDown'

import Comment from './../components/comment'

import PostGridLink from './postGridLink'
import AddPostLink from './addPostLink'
import EditPostLink from './editPostLink'

class PostDetail extends Component {

  iconSize = 22;

  componentDidMount() {

    this.props.dispatchGetPost();
  }

  reqPostThumbUpOrDown = (id, voteType) => {

    this.props.dispatchLikePost(id, voteType);
  }

  deletePost = (post) => {

    this.props.dispatchDeletePost(post.id);
    this.props.history.push('/');
  }

  redirect404 = () => {
    this.props.history.push('/notfound');
  }

  render() {

    const { postDetail, postsVotingMod } = this.props.post;
    const { id } = this.props.match.params

    return (

      <div className='post--detail--container' >
        <div>
          <PostGridLink />
        </div>
        <div className='post--add--new'>
          <AddPostLink iconSize='28' />
        </div>
        {

          postDetail && Object.keys(postDetail).length !== 0 && typeof postDetail.error === 'undefined' && (
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
                <EditPostLink id={postDetail.id} iconSize={this.iconSize} />
              </div>

              <div className='post--item--delete post--detail--third--row'>
                <MdDelete size={this.iconSize}
                  onClick={
                    () => {

                      this.deletePost(postDetail)
                    }
                  }
                />
              </div>
            </div>
          )

        }

        {
          postDetail && typeof postDetail.error === 'undefined' && (
            <Comment id={id} />
          )
        }

        {
          postDetail && postDetail.error && this.redirect404()
        }
        {
          postDetail && Object.keys(postDetail).length === 0 && this.redirect404()
        }

      </div >
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
    },
    dispatchDeletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);