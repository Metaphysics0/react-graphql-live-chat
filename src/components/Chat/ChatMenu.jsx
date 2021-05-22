import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Conversations from './Conversations';
import Message from './Message';

const ChatMenu = ({ open, content, toggleContent }) => {
  const { register, handleSubmit, reset } = useForm();
  const composeMessage = () => {
    alert('COMPOSE MESSAGE!');
  };

  // Sends message
  const onSubmit = async (data) => {
    data.id = Date.now();
    setMessages([...messages, data]);
    reset('', { keepValues: false });
  };

  const [messages, setMessages] = useState([]);

  return (
    <div className={open ? 'chat' : 'hidden'}>
      <nav className="chat__nav">
        <div className={content ? 'nav-btn' : 'transparent'}>
          <button className="" onClick={() => toggleContent()}>
            ⬅️
          </button>
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
          <button onClick={() => composeMessage()}>📝</button>
        </div>
      </nav>
      <div className="chat__content">
        {content ? (
          <>
            <Message text="Hello" send={false} />
            {messages.map((msg) => (
              <Message text={msg.message} key={msg.id} send={true} />
            ))}
          </>
        ) : (
          <Conversations toggleContent={toggleContent} />
        )}
      </div>
      <form className="chat__footer" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={!content && 'cursor-no'}
          type="text"
          placeholder="send a message!"
          disabled={!content}
          required={true}
          {...register('message')}
        />
        <button className={!content && 'cursor-no'} disabled={!content}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatMenu;
