import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let[isMorning, setMorning] = useState(false)
  return (
    <div>
      <h1>PIAIC BootCamp2020 Class-4 </h1>
      <div className = {`box ${isMorning ? 'dayLight' : 'night'}`} >
        <h3>Day time: {isMorning ? 'Morning' : 'Night'}</h3>
        <Message counter = {count}/>
        <br/>
        <button onClick = {()=> setCount(++count)}>Update Counter</button>
        <button onClick = {()=> setCount(0)}>Reset Counter</button>
        <button onClick = {()=> setMorning(!isMorning)}>Change background</button>
      </div>
    </div>
  );
}

export default App;
