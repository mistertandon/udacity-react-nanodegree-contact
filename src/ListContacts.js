import React, { Component } from 'react';

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
              <div className="contact-remove">

              </div>
            </li>
          )
        })
      }
    </ol>
  )

}

export default ListContacts;