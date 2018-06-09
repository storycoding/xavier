import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

import Login from './Login.js'
import Loading from './Loading.js'
import Contacts from './Contacts.js'
import Chat from './Chat.js'
import AddContact from './AddContact.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      page: 'Login',

      publisher: {
        name: 'Rob',
        id: 2
      },
      
      subscriber: {
        name: 'Laura',
        id: 1
      },

      contacts: ['Laura']
    }
  }

  componentDidMount() {
      console.log('AppDidMount state: ', this.state)
      // check for auth cookie
        // if cookie is valid
          // request username from server
          // request contacts from server
          // load Contacts page

        // else
          // load Login page
  }

  componentDidUpdate() {
      console.log('AppDidUpdate state: ', this.state)
  }

  updateUserInfo = (info) => {
    console.log('App login info: ', info)
    this.setState( {
      page : 'Contacts',
      publisher : info.publisher,
      contacts : info.contacts
     } )
  }

  goToPage = (page) => {
    this.setState( { page : page } )
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
            goToPage={this.goToPage.bind(this)}
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