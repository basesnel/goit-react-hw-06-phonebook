import { nanoid } from 'nanoid';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

import { ContactFormGetUp, Input } from './ContactForm.styled';
import useLocalStorage from 'components/hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/selectors';
import { addContact } from 'redux/contactsSlice';

// const phoneRegExp =
//   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const scheme = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2,3}\)?)\s?-?\s?(\(?\d{2,4}\)?)?$/,
      'Not valid, please try: +0000-000-000-0000'
    )
    .required(),
});

export default function ContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const state = { name, number };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactName = contact.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    formSubmitHandler(state);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Formik
      enableReinitialize
      initialValues={state}
      validationSchema={scheme}
      onSubmit={handleSubmit}
      isValid
    >
      <ContactFormGetUp>
        <label htmlFor={nameInputId} className="contactform__label">
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            className="contactform__input"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="contactform__error"
          />
        </label>
        <label htmlFor={numberInputId} className="contactform__label">
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            id={numberInputId}
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
