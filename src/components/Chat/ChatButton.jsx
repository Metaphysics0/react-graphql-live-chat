import React from 'react';

const ChatButton = ({ toggleMenu }) => {
  return (
    <div>
      <button onClick={() => toggleMenu()} className="button">
        💬
      </button>
    </div>
  );
};

export default ChatButton;
