import React from 'react';

export const ChatButton = ({ toggleMenu }) => {
  return (
    <div>
      <button onClick={() => toggleMenu()} className="button">
        💬
      </button>
    </div>
  );
};

export const MainButton = () => {
  return (
    <div>
      <button>📝</button>
    </div>
  );
};
