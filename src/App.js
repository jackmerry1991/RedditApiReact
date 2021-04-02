import './App.css';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react';
import ThreadList from './components/ThreadlList';
import PostList from './components/PostsList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import log from 'loglevel';
log.warn("module-tastic");

function App() {

  const[threads, setThreads] = useState([]);
  const[subReddit, setSubreddit] = useState('all');
  const[allSubs, setAllSubs] = useState([]);
  const[postData, setPostData] = useState('');

  const setLink = (linkData) => {
    setPostData(linkData);
  }


  return (
      <div className="App">
        {console.log(`In render ${typeof allSubs}`)}
        {console.log(`In render 2: ${allSubs}`)}
        <NavBar />
        <Switch>
          <Route exact path="/home" 
          render={(props)=> (
            <ThreadList {...props} setLink={setLink} />
          )}
          >
            {/* <ThreadList threads={threads} subReddits={allSubs} setSubreddit={setSubreddit} viewPosts={viewPost}/> */}
         </Route>
         <Route exact path="/posts" 
         render={(props) => (
           <PostList {...props} permaLink={postData.permaLink} heading={postData.heading} author={postData.author} votes={postData.votes} image={postData.image} time={postData.time} responses={postData.responses}/>
         )}
        />
        </Switch>
      </div>
    
  );
}

export default App;
