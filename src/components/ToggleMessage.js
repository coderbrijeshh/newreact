import React, { useState } from 'react';

function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Message
      </button>
      {(() => {
        if (visible) {
          return <p>Welcome to the world of React</p>;
        } else {
          return null;
        }
      })()}
    </div>
  );
  
}

export default ToggleMessage;