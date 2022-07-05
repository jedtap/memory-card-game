import React, { useState, useEffect } from 'react';
import './Styles/dummy.css'
import Header from './Components/Header'
import Instructions from './Components/Instructions'

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(11);
  const [guessed, setGuessed] = useState([]);

  const resetGame = () => {
    setGuessed([]);
    setScore(0);
  }

  const handleClick = (pin) => {
    if(guessed.includes(pin)) {
      resetGame();
      return
    }
    setGuessed(guessed.concat(pin));
    setScore(score + 1);
    if(score > best) { setBest(best + 1) };
  }

  // Get best score from localStorage on component mount
  useEffect(()=>{
    const storedBest = JSON.parse(window.localStorage.getItem("storedBest"));
    if (storedBest) { setBest(storedBest); }
  },[])

  // Save best score in localStorage whenever 'best' updates
  useEffect(()=>{
    window.localStorage.clear();
    window.localStorage.setItem("storedBest", JSON.stringify(best));
  },[best]);

  // Check if player has clicked all 30 pins
  useEffect(() => {
    if (score === 30) {
      resetGame();
      alert('Well done, you are a pro in photo memory!');
    }
  },[score]);

  return(<>
    <Header score={score} best={best} />
    <Instructions />

    <div className="pins">
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
      <div className="pin"></div>
    </div>
  </>);

}

export default App;