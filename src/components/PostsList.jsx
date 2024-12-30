import React from 'react'
import Post from './Post'
import styles from "./PostsList.module.css"
import NewPost from './NewPost'

export const PostsList = () => {
    return (
        <div >
            <NewPost />
            <ul className={styles.posts}>
                <Post author="saif" body="i am a software devloper" />
                <Post author="adnan" body="hahahahahahahahaha" />
                <Post author="waseem" body="I am a frontend developer" />
              
            </ul>
        </div>
    )
}
