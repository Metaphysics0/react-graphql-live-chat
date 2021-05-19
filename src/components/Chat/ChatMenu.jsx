import React from 'react';

const ChatMenu = () => {
  return (
    <div className="chat">
      {/* Navbar */}
      <nav className="chat__nav">
        <img src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg" alt="bot" />
        <h3>CustomerBot</h3>
      </nav>
      {/* Message section */}
      <div className="chat__content">
        <div className="chat__message">
          <img src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg" alt="bot" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
      </div>
      {/* Form */}
      <div className="chat__form">
        <input type="text" placeholder="send a message!" />
      </div>
    </div>
  );
};

export default ChatMenu;
