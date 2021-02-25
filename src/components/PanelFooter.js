import React from 'react';
import './PanelFooter.css';
import {GoComment} from 'react-icons/go'
import { IconContext } from 'react-icons/lib';


const PanelFooter = (props) => {
    let date = new Date(0)
    date.setUTCSeconds(props.time)
    date = date.toDateString();
    
    return (
        <div className="footer">
            <p>Posted by {props.poster}</p>
            <p>{date} hours ago</p>
            <div className="responses">
            <IconContext.Provider value={{className: "global-class-name", size: '25px' }}>
            <GoComment />
            <p>{props.responses}</p>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default PanelFooter;