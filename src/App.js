//import logo from "./logo.svg";
import './App.css';
import DVT31 from './DVT31';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [type, setType] = useState('question');
  const [questions, setQuestions] = useState([]);

  function generateQuestion() {
    const questions = [];
    
    for (let i = 0; i < 12; i++) {
      questions.push({
        no: i + 1,
        d1: getRandomArbitrary(100, 999),
        d2: getRandomArbitrary(2, 9),
      });
    }
    setQuestions(questions);
  }

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="page">
      <header>
        <h2>세자리 나눗셈 문제지</h2>
        <span>
          <button
            onClick={() => {
              setType("question");
              generateQuestion();
            }}
          >
            신규
          </button>
          <button
            onClick={() => {
              setType(type === 'question' ? 'answer' : 'question');
            }}
          >
            {type === 'answer' ? '문제' : '답안' }
          </button>
          <button
            onClick={() => {
              window.print();
            }}
          >
            인쇄
          </button>
        </span>
      </header>
      {questions.map((question, i) => {
        return (
          <DVT31
            key={i}
            no={question.no}
            type={type}
            d1={question.d1}
            d2={question.d2}
          />
        );
      })}
    </div>
  );
}

export default App;
