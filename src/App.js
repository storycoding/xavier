import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login.js';
import Landing from './Landing.js';
import Contacts from './Contacts.js';
import Chat from './Chat.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Landing/>
        <Contacts/>
        <Chat/>
      </div>
    );
  }
}

export default App;
