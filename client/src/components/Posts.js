import React from 'react';
import Post from './Post'

const Posts = props => {
  const { posts } = props;

  return(
    <div>
      {posts && 
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