import classes from './Post.module.css'
import React from 'react'

const Post = (props) => {

  return (
    <div>
      <h1 className={classes.id}>{props.id}</h1>
      <h2 className={classes.author}>{props.author}</h2>
      <h2 className={classes.comment}>{props.comment}</h2>
    </div>
  )
}

export default Post


