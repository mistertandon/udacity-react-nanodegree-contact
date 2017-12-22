import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactApi from './utils/ContactsAPI';

class App extends Component {

  state = {
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

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contactsItems={this.state.contacts} />
      </div>
    )
  }
}

export default App;
