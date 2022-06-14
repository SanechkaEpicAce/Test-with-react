import React from 'react'
import MyButton from './UI/button/MyButton'
import {useHistory} from 'react-router-dom'



const PostItem = (props) => {
  const router = useHistory()
	return (
	<div className="post">
        <div className="post-content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>  
        </div>
        <div className="postBtns">
          <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Open</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
     </div>
	)
}


export default PostItem;