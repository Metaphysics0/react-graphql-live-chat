import React from 'react';
import Conversations from './Conversations';
import Message from './Message';

const ChatMenu = ({ open, content, toggleContent }) => {
  return (
    <div className={open ? 'chat' : 'hidden'}>
      <nav className="chat__nav">
        <div className={content ? 'nav-btn' : 'transparent'}>
          <button onClick={() => toggleContent()}>⬅️</button>
        </div>
        <div className="nav-title">
          <img
            className={!content && 'hidden'}
            src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg"
            alt="bot"
          />
          <h3>{content ? 'CustomerBot' : 'Conversations'}</h3>
        </div>
        <div className={content && 'transparent'}>
          <button onClick={() => toggleContent()}>➡️</button>
        </div>
      </nav>
      <div className="chat__content">
        {content ? (
          <>
            <Message text="Hello" />
            <Message text="Hello" />
            <Message text="Hello" />
          </>
        ) : (
          <Conversations />
        )}
      </div>
      <div className="chat__footer">
        <input type="text" placeholder="send a message!" disabled={!content} />
        <button disabled={!content}>Send</button>
      </div>
    </div>
  );
};

export default ChatMenu;
