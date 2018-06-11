import React from 'react';

const Post = ({postData}) => (
  <div key={postData.id}>
    <div>{postData.created_at}</div>
    <div>{postData.content}</div>
  </div>
)

export default Post