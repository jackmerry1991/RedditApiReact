import React, {useState} from 'react';
import Thread from './Thread';


const ThreadList = (props) => {
    //declare state of the main panel may be included in props instead as api call likely included in app.js which will render multiple components based on array results
    //const [heading, setHeading] = useState('Test Heading');

    return (
        props.threads.map((thread, index) => {
            let date = new Date(0);
            date.setUTCSeconds(thread.data.created_utc);
            console.log('date' + date);
            return <Thread key={index} heading = {thread.data.title} votes={thread.data.ups} author={thread.data.author} time={thread.data.created_utc} responses={thread.data.num_comments} image={thread.data.thumbnail} height={thread.data.thumbnail_height} width={thread.data.thumbnail_width}/>
        })
            
            
        
    );

}

export default ThreadList;