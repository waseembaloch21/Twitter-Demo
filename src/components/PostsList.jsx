import React, { useState } from 'react'
import Post from './Post'
import styles from "./PostsList.module.css"

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
                <Post author="saif" comment="i am a software devloper" />
                <Post author="adnan" comment="hahahahahahahahaha" />
                <Post author="waseem" comment="I am a frontend developer" />
                <Post author="waseem" comment="I am a frontend developer" />
                <Post author="waseem" comment="I am a frontend developer" />
                <Post author="waseem" comment="I am a frontend developer" />
            </ul>
        </div>
    )
}
