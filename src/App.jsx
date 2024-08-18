import { useState } from 'react'

function App() {
  const [number,setNumber] = useState(1);
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number*5)}>
        Multiply by 5
      </button>
    </div>
    );
};

export default App;
