import React from 'react';
import logo from '../images/redditLogo.png';
import SidePanel from './SidePanel';
import './Thread.css';
import PanelFooter from './PanelFooter';
import { Switch, Link } from 'react-router-dom';


const Thread = (props) => {

    const isImage = (image) => {
        if(image.indexOf('png') !== -1 || image.indexOf('jpg') !== -1){
            return true;
        }else{
            return false;
        }
    }

    
    const viewPost = () => {
       //find post id for url path / json api call?
       let data = {
           heading: props.heading,
           votes: props.votes,
           image: props.image,
           author: props.author,
           time: props.time,
           responses: props.responses,
           permaLink: props.link
       };
       props.setLink(data)
       console.log('click ' + props.link);
    }

    return(
        
        <div className="mainPanel">
                <Link id="headingLink" to="/posts" ><h1 id="headingLink" onClick={viewPost}>{props.heading}</h1></Link>
            <div className="panelCenter">
                <div className="leftPanel">
                    <SidePanel votes={props.votes} />
                    {/* <img src={props.image} onError={(e) => e.target.style.display = "none"} alt="preview"/> */}
                </div>
                <div className = "preview">
                    {isImage(props.image) ? <img id="preview-image" src={props.image} alt="thumbnail" onError={(e) => e.target.style.display = "none"}/> : <p id="preview-text">{props.selfText}</p>}
                </div>
            </div>
        <div className="panelFooter">
            <PanelFooter poster={props.author} time={props.time} responses={props.responses}/>       
            </div>
        </div>
    )
}

export default Thread;