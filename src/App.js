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
      page: "Login"
      // save conversations here
      // do I really want to load all the conversations at once?
      // conversations get wiped logout
    }
  }

  goToPage = (page) => {
    this.setState( { page : page } );
  }

  renderPage = (page) => {
  switch(page) {
    case 'Login':
      return <Login goToPage={this.goToPage.bind(this)}/>;
    case 'Loading':
      return <Loading goToPage={this.goToPage.bind(this)}/>;
    case 'Contacts':
      return <Contacts goToPage={this.goToPage.bind(this)}/>;
    case 'Chat':
      return <Chat goToPage={this.goToPage.bind(this)}/>;
    case 'AddContact':
      return <AddContact goToPage={this.goToPage.bind(this)}/>;
    default:
      return <Loading goToPage={this.goToPage.bind(this)}/>;
  }
}
  render() {

    return (
      <div className="App">
        {this.renderPage(this.state.page)}
      </div>
    );
  }
}

export default App;