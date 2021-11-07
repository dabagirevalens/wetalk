import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="b132dd9d-6c4a-4967-8da2-0f43ef021132"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password') }
      renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App;
