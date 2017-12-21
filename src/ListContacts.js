import React from 'react';
import PropTypes from 'prop-types';

const ListContacts = (props) => {

  return (
    <ol className='contact-list'>
      {
        props.contactsItems.map((contactItem, index) => {
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
                  props.onDeleteContact(contactItem)
                }}>
              </button>

            </li>
          )
        })
      }
    </ol>
  )
}

PropTypes.ListContacts = {
  contactsItems: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;