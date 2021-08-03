import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterInc = () => setCount(count + 1)
  const counterDec = () => setCount(count - 1)

  return (
    <div>
      <h1 data-testid="header">REACT COUNTER</h1>
      <h2 data-testid="counter">{count}</h2>
      <button onClick={counterInc} data-testid="btnInc">+</button>
      <button onClick={counterDec} data-testid="btnDec">-</button>
    </div>
  )
}
export default Counter