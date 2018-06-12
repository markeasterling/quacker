import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import Relationships from '../components/Relationships';


const Feed = (props) => (
  <div>
    <h1>heyo there, {props.currentUser.name}!</h1>
    <h2>your post feed</h2>
    <Posts posts={props.currentUserFeed} />
    <h2>followers</h2>
    <Relationships users={props.currentUserRelationships.followed_users}/>
    <h2>following</h2>
    <Relationships users={props.currentUserRelationships.following}/>
  </div>
)

const mapStateToProps = state => {
  return state
}

export default connect(
mapStateToProps
)(Feed)
