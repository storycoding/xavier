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
      email: "email",
      name: "self",
      page: "Login",
      contacts: ["Other"],
      chat: {
        name: "Self",
        contactName: "Other",
        history: [
          { 
            publisher: "Other",
            content: "How are you?"
          },
          {
            publisher: "Self",
            content: "All good in the hood. You?"
          },
          {
            publisher: "Other",
            content: "Peachy!"
          }
        ]
      }
    }
  }

  componentDidMount() {
      console.log("componentDidMount state: ", this.state);
      // check for auth cookie
        // if cookie is valid
          // request username from server
          // request contacts from server
          // load Contacts page

        // else
          // load Login page
  }

  componentDidUpdate() {
      console.log("componentDidUpdate state: ", this.state);
  }

  updateContactHistory = (contact, history) => {
    let contacts = Object.assign(this.state.contacts);
    contacts[contact] = history;
    this.setState( {contacts: contacts} );
  }

  setCredentials = (credentials) => {
    console.log("App setCredentials: ", credentials);
    this.setState( credentials );
  }

  goToPage = (page) => {
    this.setState( { page : page } );
  }

  renderPage = (page) => {
    switch(page) {
      case 'Login':
        return (
          <Login
            goToPage={this.goToPage.bind(this)}
            setCredentials={this.setCredentials.bind(this)}
          />
        )

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
        return <Chat 
          updateContactHistory={this.updateContactHistory.bind(this)}
          chat={this.state.chat}
          goToPage={this.goToPage.bind(this)}/>;

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