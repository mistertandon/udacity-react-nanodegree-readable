import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPost } from './../actions/postAction'

class PostDetail extends Component {

  componentDidMount() {

    this.props.dispatchGetPost()
  }

  render() {

    let postDetail;

    if (Object.keys(this.props.post).length) {
      postDetail = Object.assign({}, this.props.post.postDetal);
    }

    return (
      <div className='post--detaill-container'>
        {
          postDetail && (<div>PostDetail</div>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {

  const { id } = ownProps.match.params;

  return {
    dispatchGetPost: () => {
      dispatch(getPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);