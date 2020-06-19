import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let[isMorning, setMorning] = useState(false)
  return (
    <div className = {`box ${isMorning ? 'dayLight' : 'night'}`} >
      <h1>Day time: {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      <br/>
      <button onClick = {()=> setCount(++count)}>Update Counter</button>
      <button onClick = {()=> setCount(0)}>Reset Counter</button>
      <button onClick = {()=> setMorning(!isMorning)}>Change background</button>
    </div>
  );
}

export default App;
