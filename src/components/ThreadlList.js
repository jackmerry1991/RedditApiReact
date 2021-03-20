import React, {useState} from 'react';
import Thread from './Thread';
import SubList from './SubList';
import './ThreadList.css';


const ThreadList = (props) => {
    //declare state of the main panel may be included in props instead as api call likely included in app.js which will render multiple components based on array results
    //const [heading, setHeading] = useState('Test Heading');
    const[isOpen, setIsOpen] = useState(false);

    const openCloseMenu = () => {
        setIsOpen(isOpen ? false : true);

    }

    return (
        <div className="mainPage">
            <div className="itemLeft"></div>
            <div className="threadList" id="threadList">
            {
                props.threads.map((thread, index) => {
                let date = new Date(0);
                date.setUTCSeconds(thread.data.created_utc);
                return <Thread key={index} heading = {thread.data.title} votes={thread.data.ups} author={thread.data.author} time={thread.data.created_utc} responses={thread.data.num_comments} image={thread.data.url} selfText={thread.data.selftext}/>
                })
            }
            </div>
            <div className="subList" id="subsMenu">
                <button onClick={openCloseMenu}>View Sub Reddits</button>
                {isOpen ? <SubList subReddits={props.subReddits} setSubreddit={props.setSubreddit}/> : ''}
            </div>
        </div>
            
        
    );

}

export default ThreadList;