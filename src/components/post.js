import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/de';

import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import FaEye from 'react-icons/lib/fa/eye'
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up'
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

import CustomThumbUp from './customThumbUp'
import CustomThumbDown from './customThumbDown'

import './../css/post.css'

import {
  addPosts,
  sortPosts,
  likePost,
  deletePost
} from './../actions/postAction'

import SortingSymbol from './sortingSymbol'
import PostGridHeader from './postGridHeader'

class Post extends Component {

  iconDefaultSize = 22;

  currentlySortedColumn = 'timestamp';

  gridHeaders = {
    title: 'title',
    author: 'author',
    category: 'category',
    voteScore: 'voteScore',
    timestamp: 'timestamp',
    commentCount: 'commentCount'
  }

  sortReset = 'reset';

  sortAscending = '';

  sortDescending = '-';

  noPostFound = 'No Post Found';

  state = {
    sortingHeaders: {
      title: {
        sortDirection: this.sortReset
      },
      author: {
        sortDirection: this.sortReset
      },
      category: {
        sortDirection: this.sortReset
      },
      commentCount: {
        sortDirection: this.sortReset
      },
      voteScore: {
        sortDirection: this.sortReset
      },
      timestamp: {
        sortDirection: this.sortReset
      }
    }
  }

  componentDidMount() {

    this.props.dispatchAddPosts();
  }

  sortColumn = (column) => {

    let reqSortingDirectionSymbol;
    let stateClone = Object.assign({}, this.state);

    reqSortingDirectionSymbol = stateClone.sortingHeaders[column].sortDirection === this.sortReset
      ? this.sortAscending
      : stateClone.sortingHeaders[column].sortDirection === this.sortDescending
        ? this.sortAscending
        : this.sortDescending;

    this.currentlySortedColumn = `${reqSortingDirectionSymbol}${column}`

    for (var headerName in stateClone.sortingHeaders) {

      stateClone.sortingHeaders[headerName].sortDirection = this.sortReset
    }

    stateClone.sortingHeaders[column].sortDirection = reqSortingDirectionSymbol;

    this.setState((state) => (stateClone));

    this.props.dispatchSortPosts(reqSortingDirectionSymbol, column)
  }

  reqPostThumbUpOrDown = (id, voteType) => {

    this.props.dispatchLikePost(id, voteType, this.currentlySortedColumn);
  }

  deletePost = (post) => {
    this.props.dispatchDeletePost(post.id, this.currentlySortedColumn)
  }

  render() {

    const { posts, postsVotingMod } = this.props.post;
    const { title, author, category, voteScore, commentCount, timestamp } = this.state.sortingHeaders;

    return (

      <div className='posts--container'>

        <div className='post--container post--headers'>

          <PostGridHeader parentDivClassName='flex--row--class post--item--a post--item'
            headerKey={this.gridHeaders.title}
            headerTitle='Title'
            headerSortingInfo={title}
            sortColumnFunc={this.sortColumn}
          />

          <PostGridHeader parentDivClassName='flex--row--class post--item--b post--item'
            headerKey={this.gridHeaders.author}
            headerTitle='Author'
            headerSortingInfo={author}
            sortColumnFunc={this.sortColumn}
          />

          <PostGridHeader parentDivClassName='flex--row--class post--item--b post--item'
            headerKey={this.gridHeaders.category}
            headerTitle='Category'
            headerSortingInfo={category}
            sortColumnFunc={this.sortColumn}
          />

          <PostGridHeader parentDivClassName='flex--row--class post--item--c post--item'
            headerKey={this.gridHeaders.voteScore}
            headerTitle='Vote Score'
            headerSortingInfo={voteScore}
            sortColumnFunc={this.sortColumn}
          />

          <PostGridHeader parentDivClassName='flex--row--class post--item--f post--item'
            headerKey={this.gridHeaders.commentCount}
            headerTitle='Comments'
            headerSortingInfo={commentCount}
            sortColumnFunc={this.sortColumn}
          />

          <PostGridHeader parentDivClassName='flex--row--class post--item--d post--item'
            headerKey={this.gridHeaders.timestamp}
            headerTitle='Timestamp'
            headerSortingInfo={timestamp}
            sortColumnFunc={this.sortColumn}
          />

          <div className='post--item--e post--item'>Actions</div>

        </div>

        {
          /**
           * Iterate over `post.posts`, to render available posts.
           */
          posts && posts.length && posts.map((post, index) => (

            <div key={`post_info_${post.id}`} className='post--container'>

              <div key={`post_title_${post.id}`} className='post--item--a post--item'>
                {post.title}
              </div>
              <div key={`post_author_${post.id}`} className='post--item--b post--item'>{post.author}</div>
              <div key={`post_category_${post.id}`} className='post--item--b post--item'>{post.category}</div>
              <div key={`post_vote_score_${post.id}`} className='post--item--c post--item'>{post.voteScore}</div>
              <div className='post--item--f post--item'>
                {post.commentCount}
              </div>
              <div key={`post_timestamp_${post.id}`} className='post--item--d post--item'>{moment(post.timestamp).format('DD-MM-YYYY')}</div>

              <div key={`post_actions_${post.id}`} className='post--item--e post--item'>

                <CustomThumbUp contentDetailObj={post}
                  votingModObj={postsVotingMod}
                  reqThumbUpOrDownFunc={this.reqPostThumbUpOrDown}
                  iconSizeProperty={this.iconSize}
                />

                <CustomThumbDown contentDetailObj={post}
                  votingModObj={postsVotingMod}
                  reqThumbUpOrDownFunc={this.reqPostThumbUpOrDown}
                  iconSizeProperty={this.iconSize}
                />

                <div>
                  <Link to={
                    {
                      pathname: '/createPost/',
                      state: {
                        isAddOperation: false,
                        isEditOperation: true,
                        id: `${post.id}`
                      }
                    }
                  }>
                    <MdEdit size={this.iconDefaultSize} />
                  </Link>
                </div>
                <div>
                  <Link to={`/postDetail/${post.id}`} >
                    <FaEye size={this.iconDefaultSize} />
                  </Link>
                </div>
                <div>
                  <MdDelete size={this.iconDefaultSize}
                    onClick={
                      () => {
                        this.deletePost(post)
                      }
                    }
                  />
                </div>

              </div>

            </div>
          ))
        }
        {
          posts && posts.length === 0 && (
            <div>
              {this.noPostFound}
            </div>
          )
        }
      </div>

    )
  }
}

/**
 * @description: `mapStateToProps` function to map state to props.
 * @param {Object} state : Global state of the react application.
 * @returns {Object} state object
 */
const mapStateToProps = (state, ownProps) => {

  const { activeCategory } = ownProps;

  if (activeCategory !== 'all') {
    state = {
      ...state,
      post: {
        ...state.post,
        posts: state.post.posts.filter(post => post.category === activeCategory)
      }
    }
  }

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

/**
 * @description: `mapDispatchToProps` function to map actions to porps.
 * @param {Function} dispatch
 * @returns {Object} Mapped object with dispatch actions.
 */
const mapDispatchToProps = (dispatch) => (
  {
    dispatchAddPosts: () => {
      dispatch(addPosts())
    },
    dispatchSortPosts: (sortOrder, column) => {
      dispatch(sortPosts(sortOrder, column))
    },
    dispatchLikePost: (id, voteType, currentlySortedColumn) => {
      dispatch(likePost(id, voteType, currentlySortedColumn))
    },
    dispatchDeletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Post);