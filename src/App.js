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
      page: "Login",
      username: "self",
      contacts: ["other"]
    }
  }

  componentDidMount() {
    console.log("call socketAPI here for contacts list");
    // make API call  with this.state.username as a param
      // should return an array
      // setState({ contacts: array})
  }

  updateContactHistory = (contact, history) => {
    let contacts = Object.assign(this.state.contacts);
    contacts[contact] = history;
    this.setState( {contacts: contacts} );
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
        return (
          <Contacts
            contacts={this.state.contacts}
            goToPage={this.goToPage.bind(this)}
          />
        )

      case 'Chat':
        return <Chat updateContactHistory={this.updateContactHistory.bind(this)} goToPage={this.goToPage.bind(this)}/>;

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