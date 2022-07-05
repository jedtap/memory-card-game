import React, { useState, useEffect } from 'react';

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
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">        
        <span class="navbar-brand mb-0 h1">Memory Pin Game</span>
        <span class="navbar-brand mb-0 h1 d-flex">aNavbar</span>
      </div>
    </nav>
    <div>
      <h1>Memory Pin Game</h1>
      <p>Test your photographic memory with this game! Goal of the game is to click all 30 pins in a row without clicking the same pin twice. Got what it takes?</p>
    </div>


  </>);

}

export default App;
