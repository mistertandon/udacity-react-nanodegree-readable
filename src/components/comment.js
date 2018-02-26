import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPostComments } from './../actions/commentAction'

class Comment extends Component {

  componentDidMount() {

    this.props.dispatchPostComments();
  }

  render() {

    const { comments } = this.props.comment;

    return (
      <div>
        Hello comments.js
      </div>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {

  const { id } = ownProps;

  return {

    dispatchPostComments: () => {
      dispatch(getPostComments(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);