import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';

class CreateContact extends Component {

  render() {

    return (

      <div>

        <Link
          to='/'
          className="close-create-contact">Create Contact</Link>

        <form className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
            <button>Add Contact</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CreateContact; 