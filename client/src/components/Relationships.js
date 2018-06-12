import React from 'react';
import { connect } from 'react-redux'
import { getUserPosts } from '../reducers/userReducer'

const Relationships = props => {
  const { users } = props;

  return(
    <ul>
      {
        users &&
        users.map((user) => (
          <li 
            key={user.id}
            onClick={() => props.getUserPosts(user.id)}
          >
            {user.name}
          </li>
        ))
      }
    </ul>
  )
}

const mapDispatchToProps = dispatch => ({
getUserPosts: (userId) => dispatch(getUserPosts(userId))
})

export default connect(null, mapDispatchToProps)(Relationships)