import './App.css';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react';
import ThreadList from './components/ThreadlList';

function App() {

  const[threads, setThreads] = useState([]);
  const[subReddit, setSubreddit] = useState('all');
  const[allSubs, setAllSubs] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/subreddits.json')
    .then(res=> {
      if(res.status !==200){
        console.log('Error fetching list of subreddits');
        return;
      }
      res.json().then(data => {
        console.log(Array.isArray(data.data.children));
        setAllSubs(data.data.children);
      })
    })
  }, []);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subReddit}.json`)
    .then(res => {
      if(res.status !==200){
        console.log('error');
        return;
      }
      res.json().then(data => {
        if(data!=null){
          setThreads(data.data.children);
        }
      })
    })
  }, [subReddit]);

  return (
    <div className="App">
      {console.log(`In render ${typeof allSubs}`)}
      {console.log(`In render 2: ${allSubs}`)}
      <NavBar />
      <ThreadList threads={threads} subReddits={allSubs} setSubreddit={setSubreddit}/>
    </div>
  );
}

export default App;
