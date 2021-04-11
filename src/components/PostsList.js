import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import {IoArrowBackSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom';
import {getPosts} from '../util/api'
import './Posts.css';
import Post from './Post.js';
import OriginalPost from './OriginalPost';
import Loading from "./Loading.js"



const PostsList = (props) => {

    const[posts, setPosts] = useState([]);
    const[originalPost, setOriginalPost] = useState([]);
    const[fetchInProgress, setFetchInProgress] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const returnedData = await getPosts(props.permaLink);
            console.log(returnedData);
            const postsData = returnedData[returnedData.length-1];
             setPosts(postsData.data.children);
             setFetchInProgress(false);
           };
           fetchData();
    }, [props.permaLink]);

    const loader = () => {
        let message = 'Loading ';
        setInterval(() => {
            return message.concat('.')
        }, 100)
        return message;
    }

    // useEffect(() => {
    //     const fetchOP = async () => {
    //         const returnedData = await getPosts(props.permaLink);
    //         console.log(returnedData);            
    //          setOriginalPost(returnedData.shift().data.children);
    //        };
    //        console.log(`originalPost=${originalPost}`);

    //        fetchOP();
    // }, [props.permaLink])


//TODO IMPLEMENT COMMENTS USING COMMENTS TO CREATE BRANCH OF POSTS RESPONDING TO EACH POST
    return (
        <div className="mainDiv">
              <div className="heading" id="header">
            <Link className="homeLink" to="/home">
                <IconContext.Provider value={{className: "global-class-name", size: '4rem' }}>
                <IoArrowBackSharp />
                </IconContext.Provider>
            </Link>
        </div>
        <div className="postsList">
            {fetchInProgress ? <Loading /> :
        <OriginalPost heading={props.heading} votes={props.votes} author={props.author} image={props.image} time={props.time} responses={props.responses}/>}
            { posts.map((post)=> {
                let date = new Date(0);
                date.setUTCSeconds(post.data.created_utc);
                return (
                <Post body={post.data.body} author={post.data.author} time={post.data.created_utc} upVotes={post.data.ups} downVotes={post.data.downs}/>
                )
            })}
            
        </div>
        </div>
    )
}

export default PostsList;
