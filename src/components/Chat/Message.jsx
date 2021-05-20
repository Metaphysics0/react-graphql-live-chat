import React from 'react';

const Message = ({ text }) => {
  return (
    <div className="chat__message">
      <img src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg" alt="bot" />
      <p className="chat__bubble">{text}</p>
    </div>
  );
};

export default Message;
