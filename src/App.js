import React, { Component } from 'react';
import * as ContactApi from './utils/ContactsAPI';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact'

class App extends Component {

  state = {
    screen: 'list', // screen: 'list' OR 'create'
    contacts: []
  }

  componentDidMount() {

    ContactApi
      .getAll()
      .then((contactItems) => {

        this.setState({
          contacts: contactItems
        });
      });
  }

  removeContact = (updatedContactItem) => {

    this.setState((state) => ({
      contacts: state.contacts.filter(contactItem => contactItem.id !== updatedContactItem.id)
    }))

  }

  createScreen = () => {

    this.setState((state) => ({
      screen: 'create'
    }))

  }

  render() {

    const { screen } = this.state;

    return (
      <div>

        {
          screen == 'list' && (
            <ListContacts
              onDeleteContact={this.removeContact}
              contactsItems={this.state.contacts}
              createScreen={this.createScreen}
            />
          )
        }

        {
          screen == 'create' && (
            <CreateContact />
          )
        }

      </div>
    )
  }
}

export default App;
