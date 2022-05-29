import { useState } from 'react';
import boxes from './boxes'
import './App.css';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevState => {
      return prevState.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squaresElements = squares.map((square) => (
    <Box 
      key={square.id} 
      id={square.id} 
      on={square.on} 
      handleClick={toggle}
    />
  ))

  return (
    <main className="main-container">
      { squaresElements }
    </main>
  );
}

export default App;
