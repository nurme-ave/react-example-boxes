import { useState } from 'react';
import boxes from './boxes'
import './App.css';

function App() {
  const [squares, setSquares] = useState(boxes)

  const squaresElements = squares.map((square) => {
    return <div className="box" key={square.id}></div>
  })

  return (
    <main className="main-container">
      { squaresElements }
    </main>
  );
}

export default App;
