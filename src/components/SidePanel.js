import React from 'react';
import {BiUpvote, BiDownvote} from 'react-icons/bi';
import { IconContext } from "react-icons";

const SidePanel = (props) => {
    
    return (
        <div className="votesContainer">
            <IconContext.Provider value={{className: "global-class-name", size: '25px' }}>
            <BiUpvote value={{size: '50px'}} />
            <p>{props.votes}</p>
            <BiDownvote value={{size: '50px'}}/>
            </IconContext.Provider>
        </div>
    )
}

export default SidePanel;