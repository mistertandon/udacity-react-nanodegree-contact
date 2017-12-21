import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {

  static propTypes = {
    contactsItems: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (needle) => {

    this.setState({ query: needle.trim() })
  }

  render() {

    let showingContacts;

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contactsItems.filter((contactItem) => match.test(contactItem.name));
    } else {
      showingContacts = this.props.contactsItems;
    }

    showingContacts.sort(sortBy('name'));

    return (

      <div className='list-contacts'>

        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            value={this.state.query}
            onChange={event => { this.updateQuery(event.target.value) }}
          />
        </div>

        <ol className='contact-list'>
          {
            showingContacts.map((contactItem, index) => {
              return (
                <li key={index} className='contact-list-item'>

                  <div className="contact-avatar" style={{
                    backgroundImage: `url(${contactItem.avatarURL})`
                  }}
                  >
                  </div>

                  <div className='contact-details'>
                    <p>{contactItem.name}</p>
                    <p>{contactItem.email}</p>
                  </div>

                  <button
                    className="contact-remove"
                    onClick={() => {
                      this.props.onDeleteContact(contactItem)
                    }}>
                  </button>

                </li>
              )
            })
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts;