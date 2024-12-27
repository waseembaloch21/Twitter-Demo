
import React from 'react'

const names = ['waseem', "saif"]

const Post = () => {
    const choosenNames = Math.random() >= 0.5 ? names[0] : names[1] 
  return (
    <div>{choosenNames}</div>
  )
}

export default Post


