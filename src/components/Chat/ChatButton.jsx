import React from 'react';

const handleClick = () => {
  alert('AHHHH');
};

const Chat = () => {
  return (
    <div>
      <button onClick={() => handleClick()} className="button">
        💬
      </button>
    </div>
  );
};

export default Chat;
