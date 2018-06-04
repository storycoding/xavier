import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login.js';
import Loading from './Loading.js';
import Contacts from './Contacts.js';
import Chat from './Chat.js';
import AddContact from './AddContact.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // save conversations here
      // do I really want to load all the conversations at once?
      // conversations get wiped logout
    }
  }
  render() {
    return (
      <div className="App">
        <Login/>
        <Loading/>
        <Contacts/>
        <Chat/>
        <AddContact/>
      </div>
    );
  }
}

export default App;