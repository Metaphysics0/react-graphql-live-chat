import React from 'react';

// Conversations tab
const Conversations = ({ toggleContent }) => {
  return (
    <div className="convo" onClick={toggleContent}>
      <img
        src="https://static.hsappstatic.net/bots-ui-app/ex/bot-avatar.jpg"
        alt="bot"
        className="convo__img"
      />
      <div className="convo__content">
        <div className="convo__top">
          <h5 className="convo__name">HubBot</h5>
          <p className="convo__date">2 days ago</p>
        </div>
        <p className="convo__msg">Hello</p>
      </div>
    </div>
  );
};

export default Conversations;
