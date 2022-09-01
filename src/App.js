//import logo from "./logo.svg";
import './App.css';
import DVT31 from './DVT31';
import { useState } from 'react';

function App() {

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  }

  const [type , setType] = useState('question');

  const questions = [];
  for( let i = 0 ; i < 9 ; i++) {
    questions.push({
      no : i+1, d1 : getRandomArbitrary(100, 999), d2 : getRandomArbitrary(2, 9)
    });
  }

  return (
    <div className="page">
      <header><span><button onClick={()=>{setType('answer');}}>답안</button></span></header>
      {questions.map((question, i)=> {
        return <DVT31 key={i} no={question.no} type={type} d1={question.d1} d2={question.d2} />  
      })}
    </div>
  );
}

export default App;
