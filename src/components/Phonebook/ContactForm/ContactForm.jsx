import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

import { ContactFormGetUp, Input } from './ContactForm.styled';

// const phoneRegExp =
//   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const scheme = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2,3}\)?)\s?-?\s?(\(?\d{2,4}\)?)?$/,
      'Not valid, please try: +0000-000-000-0000'
    ),
});

class ContactForm extends React.Component {
  state = { name: '', number: '' };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={this.state}
        validationSchema={scheme}
        onSubmit={this.handleSubmit}
      >
        <ContactFormGetUp>
          <label htmlFor={this.nameInputId} className="contactform__label">
            Name
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              className="contactform__input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="contactform__error"
            />
          </label>
          <label htmlFor={this.numberInputId} className="contactform__label">
            Number
            <Input
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
              className="contactform__input"
            />
            <ErrorMessage
              name="number"
              component="div"
              className="contactform__error"
            />
          </label>
          <button type="submit" className="contactform__button">
            Add contact
          </button>
        </ContactFormGetUp>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
