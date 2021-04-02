import React, {useState, useEffect} from 'react';
import Thread from './Thread';
import SubList from './SubList';
import './ThreadList.css';
import {getSubReddits, getResults} from '../util/api';

const ThreadList = (props) => {
    //declare state of the main panel may be included in props instead as api call likely included in app.js which will render multiple components based on array results
    //const [heading, setHeading] = useState('Test Heading');
    const[threads, setThreads] = useState([]);
    const[subReddit, setSubreddit] = useState('all');
    const[allSubs, setSubList] = useState([]);
    const[route, setRoute] = useState('/');
  
    //set subreddits 
    useEffect(() => {
    const fetchSubs = async () => {
        const returnedData = await getSubReddits();
        setSubList(returnedData)
    }
    fetchSubs();
    }, []);
  
  //set threads based on selected subreddit
    useEffect(() => {
        const fetchData = async () => {
         const returnedData = await getResults(subReddit);
         console.log(returnedData);
          setThreads(returnedData);
        };
     
        fetchData();
      }, [subReddit]);
    

   const[isOpen, setIsOpen] = useState(false);

    const openCloseMenu = () => {
        setIsOpen(isOpen ? false : true);

    }

    

    return (
        <div className="mainPage">
            <div className="itemLeft"></div>
            <div className="threadList" id="threadList">
                {    console.log(`threads after call=${threads}`)
}
                    {
                        threads.map((thread, index) => {
                        let date = new Date(0);
                        date.setUTCSeconds(thread.data.created_utc);
                        return <Thread key={index} heading = {thread.data.title} votes={thread.data.ups} author={thread.data.author} time={thread.data.created_utc} responses={thread.data.num_comments} image={thread.data.url} selfText={thread.data.selftext} link={thread.data.permalink} setLink={props.setLink}/>
                        })
                    }
            </div>
            <div className="subList" id="subsMenu">
                <button onClick={openCloseMenu}>View Sub Reddits</button>
                {isOpen ? <SubList subReddits={allSubs} setSubreddit={props.setSubreddit}/> : ''}
            </div>
        </div>
            
        
    );

}

export default ThreadList;