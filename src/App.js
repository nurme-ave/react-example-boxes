import { useState } from 'react';
import boxes from './boxes'
import './App.css';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)

  const squaresElements = squares.map((square) => {
    return <Box key={square.id} on={square.on} />
  })

  return (
    <main className="main-container">
      { squaresElements }
    </main>
  );
}

export default App;
