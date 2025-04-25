import React, { useState } from 'react';

function Counter() {
 
  const [counter, setCounter] = useState(0);

  const [step, setStep] = useState(1);

 
  const increase = () => {
    setCounter(prevCounter => prevCounter + step);
  };


  const decrease = () => {
    setCounter(prevCounter => Math.max(prevCounter - step, 0));
  };


  const handleStepChange = (e) => {
    const value = Math.max(Number(e.target.value), 1); 
    setStep(value);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      
      <div>
        <label>
          Step Value:
          <input 
            type="number" 
            value={step} 
            onChange={handleStepChange} 
            min="1" 
          />
        </label>
      </div>
    </div>
  );
}

export default Counter;
