import { render } from '@testing-library/react';
import React, {useState} from 'react';
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
            </nav>
        </div>
            
    )
        
    
}

export default NavBar
