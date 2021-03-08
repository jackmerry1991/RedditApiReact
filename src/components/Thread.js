import React from 'react';
import logo from '../images/redditLogo.png';
import SidePanel from './SidePanel';
import './Thread.css';
import PanelFooter from './PanelFooter';


const Thread = (props) => {

    const isImage = (image) => {
        if(image.indexOf('png') !== -1 || image.indexOf('jpg') !== -1){
            return true;
        }else{
            return false;
        }
    }


    return(

     
        <div className="mainPanel">
            <h1>{props.heading}</h1>

            <div className="leftPanel">
                <SidePanel votes={props.votes} />
                {/* <img src={props.image} onError={(e) => e.target.style.display = "none"} alt="preview"/> */}
            </div>
            <div className = "preview">
                {isImage(props.image) ? <img id="preview-image" src={props.image} alt="thumbnail"/> : <p id="preview-text">{props.selfText}</p>}
            </div>
        <div className="panelFooter">
            <PanelFooter poster={props.author} time={props.time} responses={props.responses}/>       
            </div>
        </div>
    )
}

export default Thread;