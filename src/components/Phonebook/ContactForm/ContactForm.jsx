import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { ContactFormGetUp } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = { name: '', number: '' };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormGetUp onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className="contactform__label">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
            id={this.nameInputId}
            className="contactform__input"
          />
        </label>
        <label htmlFor={this.numberInputId} className="contactform__label">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
            id={this.numberInputId}
            className="contactform__input"
          />
        </label>
        <button type="submit" className="contactform__button">
          Add contact
        </button>
      </ContactFormGetUp>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
