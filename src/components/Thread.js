import React from 'react';
import logo from '../images/redditLogo.png';
import SidePanel from './SidePanel';
import './Thread.css';
import PanelFooter from './PanelFooter';


const Thread = (props) => {
    const imageStyle = {
        height: props.height,
        width: props.width
    };

    return(

     
        <div className="mainPanel">
            <div className="leftPanel">
                <SidePanel votes={props.votes} />
              
            </div>
        <div className = "centralThreadContainer">
                <h1>{props.heading}</h1>
                
            {props.image !== 'self' ? <img src={props.image} alt="thumbnail" style={imageStyle}/> : <p></p>}
        </div>
        <div className="panelFooter">
            <PanelFooter poster={props.author} time={props.time} responses={props.responses}/>       
            </div>
        </div>
    )
}

export default Thread;