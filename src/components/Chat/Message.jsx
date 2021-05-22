import React from 'react';

// Message bubble
const Message = ({ text, send }) => {
  return (
    <div className={send ? 'chat__message chat__message--send' : 'chat__message'}>
      <img
        className={send && 'hidden'}
        src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg"
        alt="bot"
      />
      <p className="chat__bubble">{text}</p>
    </div>
  );
};

export default Message;
