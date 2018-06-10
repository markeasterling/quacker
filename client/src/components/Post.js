import React from 'react';

const Post = ({postData}) => (
  <div key={postData.id}>
    {postData.content}
  </div>
)

export default Post