import React from 'react';
import './PanelFooter.css';
import {GoComment} from 'react-icons/go'
import { IconContext } from 'react-icons/lib';


const PanelFooter = (props) => {
    let date = new Date(0)
    date.setUTCSeconds(props.time)

    const timeSincePost = (date) => {
       
        //calculate total time and return days if days, hours if hours or minutes if minutes
        const now = new Date().getTime();
        let diffInSeconds = Math.abs(now - date) / 1000;
        //calculate difference in days
        
        let diffInDays = Math.floor(diffInSeconds / 86400);
        diffInSeconds -= diffInDays * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(diffInSeconds / 3600) % 24;
        diffInSeconds -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(diffInSeconds / 60) % 60;
        diffInSeconds -= minutes * 60;

        if(diffInDays){
            return diffInDays > 1 ? `${diffInDays} days ago` : `${diffInDays} day ago`;
        }else if(hours){
            return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`;
        }else if(minutes){
            return minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`;
        }else{
        return 'Less than a minute '
        }
    }

    
    return (
        <div className="footer">
            <div className="poster">
                <p className="mainText">Posted by &nbsp;</p> <p className="posterName">{`${props.poster}`}</p>
            </div>
            <p className="mainText">{timeSincePost(date)}</p>
            <div className="responses">
            <IconContext.Provider value={{className: "mainText", size: '25px' }}>
            <GoComment />
            <p>{props.responses}</p>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default PanelFooter;