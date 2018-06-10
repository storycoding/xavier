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
        name: null,
        id: null
      },
      
      subscriber: {
        name: null,
        id: null
      },

      contacts: null,

      history: null
    }
  }

  goToPage = (page) => {
    this.setState( { page : page } )
  }

  componentDidMount() {
      console.log('AppDidMount: ', this.state)

      const users = {
        publisher_id : this.state.publisher.id,
        subscriber_id : this.state.subscriber.id
      }

      if(this.state.publisher.id) {
        socketAPI.getMessages(users, (response) => {
          this.setState( { history: response } )
        })
      }
      

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
    if (this.state.history !== nextState.history) {
      return true;
    }

    if (this.state.page !== nextState.page) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
      console.log('AppDidUpdate: ', this.state)
  }

// get subscribe
  updateUserInfo = (info) => {
    console.log('App login info: ', info)

    this.setState( {
      page : 'Contacts',
      publisher : info.publisher,
      subscriber : { name: 'Laura', id:'1'},
      contacts : info.contacts
     } )
  }

  renderPage = (page) => {
    switch(page) {
      case 'Login':
        return (
          <Login
            goToPage={this.goToPage.bind(this)}
            updateUserInfo={this.updateUserInfo.bind(this)}
          />
        )

      case 'Loading':
        return <Loading goToPage={this.goToPage.bind(this)}/>

      case 'Contacts':
        return (
          <Contacts
            contacts={this.state.contacts}
            goToPage={this.goToPage.bind(this)}
          />
        )

      case 'Chat':
        return (
          <Chat 
            publisher={this.state.publisher}
            subscriber={this.state.subscriber}
            goToContacts={this.goToPage.bind(this, 'Contacts')}
            history={this.state.history}
          />
        )

      case 'AddContact':
        return <AddContact goToPage={this.goToPage.bind(this)}/>

      default:
        return <Loading goToPage={this.goToPage.bind(this)}/>
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