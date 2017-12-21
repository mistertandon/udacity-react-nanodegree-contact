import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {

  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (updatedContactItem) => {

    this.setState((state) => ({
      contacts: state.contacts.filter(contactItem => contactItem.id !== updatedContactItem.id)
    }))
    
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contactsItems={this.state.contacts} />
      </div>
    )
  }
}

export default App;
