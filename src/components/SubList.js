import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './SubList.css'

const SubList = (props) => {

    const selectSubReddit = (e) => {
        console.log(`Select ${e.target.value}`);
        props.setSubreddit(e.target.value);
    }
  
    return(
        props.subReddits.map((subReddit, i) => {
            return (<button className="menuButton" id={i} onClick={selectSubReddit} value={subReddit.data.display_name}>{subReddit.data.display_name}<img className="iconImage" src={subReddit.data.icon_img} alt='' onError={(e)=>e.target.setAttribute('src', '../images/newLogo.png')}></img></button>)
        })
    )
}

export default SubList;