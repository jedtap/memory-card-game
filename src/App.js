import React, { useState, useEffect } from 'react';
import './Styles/App.css'
import Header from './Components/Header'
import Instructions from './Components/Instructions'
import randomPins from './Components/Randomizer'
import Pin from './Components/Pin'

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
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
    if(score >= best) { setBest(best + 1) };
  }

  // Get best score from localStorage on component mount
  useEffect(()=>{
    const storedBest = JSON.parse(window.localStorage.getItem("storedBest"));
    if (storedBest) { setBest(storedBest); }
    // window.localStorage.clear();
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
      {randomPins().map((pin) => <Pin pin={pin} handleClick={(handleClick)}/>)}
    </div>
  </>);

}

export default App;