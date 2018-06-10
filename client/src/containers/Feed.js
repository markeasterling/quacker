import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts'

const Feed = (props) => (
  <div>
    <h1>heyo there, {props.currentUser.name}!</h1>
    <h2>your post feed</h2>
    <Posts posts={props.currentUserFeed} />
    
  </div>
)

const mapStateToProps = state => {
  return state
}

export default connect(
mapStateToProps
)(Feed)
