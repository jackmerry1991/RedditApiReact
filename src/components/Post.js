import React from 'react';
import PostBody from './PostBody';
import PostData from './PostData';
import './Posts.css'

const Post = (props) => {

    return(
        <div className="postContainer">
            <PostBody body={props.body} />
            <PostData author={props.author} time={props.time} upVotes={props.upVotes} downVotes={props.downVotes}/>
        </div>
    )
}

export default Post;