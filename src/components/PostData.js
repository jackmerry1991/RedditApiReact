import { IconContext } from "react-icons";
import {BiUpvote, BiDownvote} from 'react-icons/bi';
import './Posts.css';


const PostData = (props) => {

    let date = new Date(0)
    date.setUTCSeconds(props.time)
    const calculateTime = (time) => {
       
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

    const moreUpsThanDowns = (ups, downs) => {
        console.log('more upse' + ups + downs)

       if(ups >= downs){
           return 'true'
       }else{
           return 'false'
       }

    }

    return (
        <div className="postFooter">
            <div className="userName">
                <p>{props.author}</p>
                <div className="postTime">
                    <p>{calculateTime(props.time)}</p>
                </div>
            </div>
            <div className="votes">
                <IconContext.Provider value={{className: "global-class-name", size: '25px' }}>
                <BiUpvote value={{size: '15px'}} />
                 {moreUpsThanDowns() ? <p>{props.upVotes}</p> : <p>{props.downVotes}</p>}
                <BiDownvote value={{size: '15px'}}/>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default PostData;