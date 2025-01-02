import React, { useState } from 'react'
import Post from './Post'
import styles from "./PostsList.module.css"
import NewPost from './NewPost'


export const PostsList = () => {

    const [onComment,setOnComment] = useState("")
    const [onAuthor,setOnAuthor] = useState('')

    function onCommentHandler(event){
        setOnComment(event.target.value)
    }

    function onAuthorHandler(event){
        setOnAuthor(event.target.value)
    }

    return (
        <div >
            <ul className={styles.ul}>
                <NewPost onAuthorChange={onAuthorHandler} onCommentChange={onCommentHandler}   />
                <Post author={onAuthor} comment={onComment} />
                <Post author="adnan" comment="hahahahahahahahaha" />
                <Post author="waseem" comment="I am a frontend developer" />
              
            </ul>
        </div>
    )
}
