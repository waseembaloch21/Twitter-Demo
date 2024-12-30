import classes from './Post.module.css'
import React from 'react'

const Post = (props) => {

  return (
    <div className={classes.post}>
    <li >
      <h2 className={classes.author}>{props.author}</h2>
      <h2 className={classes.comment}>{props.comment}</h2>
    </li>
    </div>
  )
}

export default Post


