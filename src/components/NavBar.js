import { render } from '@testing-library/react';
import React from 'react';
import logo from '../images/newLogo.png';
import './NavBar.css';

const NavBar = (props) => {
   
    return(
        <div className="navBarDiv">
            <nav>
                <div className="circle">
                    <img src={logo} alt="logo"></img>
                </div>
                <h1 className="firstWord">Reddit</h1><h1 className="secondWord">Lite</h1>
                <select>
                {
                      props.subReddits.map((subReddit, i) => {
                        return (<option id={i}>{subReddit.data.display_name}</option>)
                    })
                }
                
                
                    
             </select>
            </nav>
            
        </div>
    )
        
    
}

export default NavBar
