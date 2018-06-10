import React from 'react';
import Post from './Post'

const Posts = props => {
  const { posts } = props;

  return(
    <div>
      <button onClick={() => console.log(posts)}>what posts?</button>
      {
        (posts.length !== 0) && 
          posts.map((postData) => (
            <Post
              key={postData.id} 
              postData={postData} 
            />
          ))
      }
    </div>
  )
}

export default Posts