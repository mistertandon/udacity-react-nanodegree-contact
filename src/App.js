import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as ContactApi from './utils/ContactsAPI';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact'

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

  createScreen = () => {

    this.setState((state) => ({
      screen: 'create'
    }))

  }

  render() {

    return (
      <div>

        {
          <Route exact path='/' render={() =>
            (
              <ListContacts
                onDeleteContact={this.removeContact}
                contactsItems={this.state.contacts}
              />
            )
          } />
        }

        <Route path='/createContact' component={CreateContact} />

      </div>
    )
  }
}

export default App;
