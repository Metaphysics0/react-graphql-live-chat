import { useState } from 'react';
import ChatButton from './components/Chat/ChatButton';
import ChatMenu from './components/Chat/ChatMenu';
import Navbar from './components/Navbar';

function App() {
  const [open, setIsOpen] = useState(false);
  const [content, setContent] = useState(false);
  function toggleMenu() {
    setIsOpen(!open);
  }
  function toggleContent() {
    setContent(!content);
  }
  return (
    <>
      <Navbar />
      <ChatMenu open={open} content={content} toggleContent={toggleContent} />
      <ChatButton toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
