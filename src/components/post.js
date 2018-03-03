import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import sortBy from 'sort-by'
import moment from 'moment';
import 'moment/locale/de';

import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import FaEye from 'react-icons/lib/fa/eye'
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up'
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down'

import './../css/post.css'

import { addPosts } from './../actions/postAction'

class Post extends Component {

  iconDefaultSize = 22;

  gridHeaders = {
    title: 'title',
    author: 'author',
    category: 'category',
    VoteScore: 'VoteScore',
    timestamp: 'timestamp'
  }

  sortReset = 'reset';

  sortAscending = '+';

  sortDescending = '-';

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
      VoteScore: {
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

  sortColumn = (columnName) => {

    let reqSortingDirectionSymbol;
    let stateClone = Object.assign({}, this.state);

    reqSortingDirectionSymbol = stateClone.sortingHeaders[columnName].sortDirection === this.sortReset
      ? this.sortAscending
      : stateClone.sortingHeaders[columnName].sortDirection === this.sortAscending
        ? this.sortDescending
        : this.sortAscending;

    for (var headerName in stateClone.sortingHeaders) {

      stateClone.sortingHeaders[headerName].sortDirection = this.sortReset
    }

    stateClone.sortingHeaders[columnName].sortDirection = reqSortingDirectionSymbol;

    this.setState((state) => (stateClone));
  }

  render() {

    const { posts } = this.props.post;
    const { title, author, category, VoteScore, timestamp } = this.state.sortingHeaders;

    return (

      <div className='posts--container'>

        <div className='post--container post--headers'>


          <div className='flex--row--class post--item--a post--item'
            onClick={
              () => {
                this.sortColumn(this.gridHeaders.title)
              }
            }
          >
            <div>Title</div>
            <div className='flex--column--class'>
              {
                ((title.sortDirection === this.sortReset) || (title.sortDirection === this.sortDescending)) && (
                  <div className='arrow--drop--up'>
                    <MdArrowDropUp />
                  </div>
                )
              }
              {
                ((title.sortDirection === this.sortReset) || (title.sortDirection === this.sortAscending)) && (
                  <div className='arrow--drop--down'>
                    <MdArrowDropDown />
                  </div>
                )
              }

            </div>
          </div>
          <div className='flex--row--class post--item--b post--item'>
            <div>Author</div>
            <div className='flex--column--class'>
              <div className='arrow--drop--up'>
                <MdArrowDropUp />
              </div>
              <div className='arrow--drop--down'>
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className='flex--row--class post--item--b post--item'>
            <div>Category</div>
            <div className='flex--column--class'>
              <div className='arrow--drop--up'>
                <MdArrowDropUp />
              </div>
              <div className='arrow--drop--down'>
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className='flex--row--class post--item--c post--item'>
            <div>VoteScore</div>
            <div className='flex--column--class'>
              <div className='arrow--drop--up'>
                <MdArrowDropUp />
              </div>
              <div className='arrow--drop--down'>
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className='flex--row--class post--item--b post--item'>
            <div>Timestamp</div>
            <div className='flex--column--class'>
              <div className='arrow--drop--up'>
                <MdArrowDropUp />
              </div>
              <div className='arrow--drop--down'>
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className='post--item--b post--item'>Actions</div>
        </div>

        {
          /**
           * Iterate over `post.posts`, to render available posts.
           */
          posts && posts.length && posts.map((post, index) => (

            <div key={`post_info_${index}`} className='post--container'>

              <div key={`post_title_${index}`} className='post--item--a post--item'>
                {post.title}
              </div>
              <div key={`post_author_${index}`} className='post--item--b post--item'>{post.author}</div>
              <div key={`post_category_${index}`} className='post--item--b post--item'>{post.category}</div>
              <div key={`post_vote_score_${index}`} className='post--item--c post--item'>{post.voteScore}</div>
              <div key={`post_timestamp_${index}`} className='post--item--b post--item'>{moment(post.timestamp).format('DD-MM-YYYY')}</div>

              <div key={`post_actions_${index}`} className='post--item--b post--item'>
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
                </Link>&nbsp;&nbsp;
                <Link to={`/postDetail/${post.id}`} >
                  <FaEye size={this.iconDefaultSize} />
                </Link>
                &nbsp;
                <MdDelete size={this.iconDefaultSize} />

              </div>

            </div>
          ))
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

  return activeCategory !== 'all' ? {
    ...state,
    post: {
      ...state.post,
      posts: state.post.posts.filter(post => post.category === activeCategory)
    }
  } : state;

}

/**
 * @description: `mapDispatchToProps` function to map actions to porps.
 * @param {Function} dispatch
 * @returns {Object} Mapped object with dispatch actions.
 */
function mapDispatchToProps(dispatch) {

  return {
    dispatchAddPosts: () => {
      dispatch(addPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);