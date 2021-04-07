import React from 'react';
import {BiUpvote, BiDownvote} from 'react-icons/bi';
import { IconContext } from "react-icons";
import './SidePanel.css';

const SidePanel = (props) => {
    
    return (
        <div className="votesContainer">
            <IconContext.Provider value={{className: "keySymbol", size: '2rem' }}>
            <BiUpvote value={{size: '100px'}} />
            <p>{props.votes}</p>
            <BiDownvote value={{size: '100px'}}/>
            </IconContext.Provider>
        </div>
    )
}

export default SidePanel;