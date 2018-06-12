import React, { Component } from 'react'
import './App.css'

import Login from './Login.js'
import Loading from './Loading.js'
import Contacts from './Contacts.js'
import Chat from './Chat.js'
import AddContact from './AddContact.js'

import { socketAPI } from './socketAPI.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      page: 'Login',

      publisher: {
        name: '',
        id: ''
      },
      
      subscriber: {
        name: '',
        id: ''
      },

      contacts: [],
      history: []
    }
  }


  updatePage = (page) => this.setState( { page : page } )
  updateSubscriber = (subscriber) => this.setState( { subscriber : subscriber } )
  clearHistory = (history) => this.setState( { history: [] } )
  updatePublisher = (publisher) => this.setState( { publisher : publisher } )
  updateHistory = (history) => this.setState( { history: history } )
  updateContacts = (contacts) => this.setState( { contacts : contacts } )
  

  componentDidMount() {
      console.log('AppDidMount: ', this.state)
      
      socketAPI.registerForUpdates(
        this.updatePublisher.bind(this), 
        this.updateSubscriber.bind(this),
        this.updateHistory.bind(this),
        this.updateContacts.bind(this)
      )
      // check for auth cookie
        // if cookie is valid
          // request username from server
          // request contacts from server
          // load Contacts page

        // else
          // load Login page
  }

  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('AppShouldUpdate?')
    if (this.state.history.length !== nextState.history.length) {
      return true;
    }

    if (this.state.page !== nextState.page) {
      return true;
    }

    if (this.state.contacts.length !== nextState.contacts.length) {
      return true;
    }

    if(this.state.subscriber.id !== nextState.subscriber.id) {
      return true
    }

    return false;
  }
  

  componentDidUpdate() {
      console.log('AppDidUpdate: ', this.state)
  }

  renderPage = (page) => {
    switch(page) {
      case 'Login':
        return (
          <Login
            updatePage={this.updatePage.bind(this)}
          />
        )

      case 'Loading':
        return <Loading updatePage={this.updatePage.bind(this)}/>

      case 'Contacts':
        return (
          <Contacts
            updateSubscriber={this.updateSubscriber.bind(this)}
            contacts={this.state.contacts}
            updatePage={this.updatePage.bind(this)}
          />
        )

      case 'Chat':
        return (
          <Chat
            clearHistory={this.clearHistory.bind(this)}
            publisher={this.state.publisher}
            subscriber={this.state.subscriber}
            goToContacts={this.updatePage.bind(this, 'Contacts')}
            history={this.state.history}
            updateHistory={this.updateHistory.bind(this)}
            input={this.state.input}
          />
        )

      case 'AddContact':
        return <AddContact updatePage={this.updatePage.bind(this)}/>

      default:
        return <Loading updatePage={this.updatePage.bind(this)}/>
    }
  }
  render() {


    return (
      <div className='App'>
        {this.renderPage(this.state.page)}
      </div>
    )
  }
}

export default App