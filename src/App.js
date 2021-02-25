import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react';
import ThreadList from './components/ThreadlList';

function App() {

  const[threads, setThreads] = useState([]);
  const[subReddit, setSubreddit] = useState('webdev');

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
      {console.log(threads)}
      <NavBar />
      <ThreadList threads={threads}/>
    </div>
  );
}

export default App;
