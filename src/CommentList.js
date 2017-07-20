import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { comments } = this.props;
    const { isOpen } = this.state;
    const commentComponents = isOpen ? comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>) : null

    return (
      <div>
        <button onClick = {this.toggleOpen}>Open Comments</button>
        <ul>
          {commentComponents}
        </ul>
      </div>
    )
  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
