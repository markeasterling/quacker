import React from 'react';

const Relationships = props => {
  const { users } = props;

  return(
    <ul>
      {
        users &&
        users.map((user) => (
          <li 
            key={user.id}
            onClick={() => console.log(user.id)}
          >
            {user.name}
          </li>
        ))
      }
    </ul>
  )
}

export default Relationships