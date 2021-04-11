import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import './Loading.css';

export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          done: undefined
       }
    }
    render(){
       return(
        <ReactLoading type={"bars"} color={"white"} />
       )
    }
 }
