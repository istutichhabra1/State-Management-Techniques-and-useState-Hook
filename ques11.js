import React, { useState } from 'react';

function ToggleMessage() {

  const [isVisible, setIsVisible] = useState(false);

 
  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>Hello, welcome to React state management!</p>}
    </div>
  );
}

export default ToggleMessage;
