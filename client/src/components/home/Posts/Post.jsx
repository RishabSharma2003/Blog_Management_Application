import React from 'react'


export const addElipsis=(str,limit=20)=>{
    return str.length>limit?str.substring(0,limit)+'...':str;
}
const Post = ({post}) => {
  return (
    <h1>
      <img src={post.picture}></img>
      <>
      {addElipsis(post.title)}
      </>
    </h1>
  )
}

export default Post
