import React from 'react'
import Post from './Post'
import styles from "./PostsList.module.css"
import NewPost from './NewPost'

export const PostsList = () => {
    return (
        <div >
            <NewPost />
            <ul className={styles.posts}>
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
