import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import Relationships from '../components/Relationships';

const User = (props) => (
   <div>
    <Posts posts={props.userPosts}/>
  </div>
)

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(User)
