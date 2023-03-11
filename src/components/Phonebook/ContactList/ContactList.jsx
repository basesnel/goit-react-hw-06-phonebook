import PropTypes from 'prop-types';
import { ContactListGetUp } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListGetUp>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <span className="contact__name">{name}</span>
          <span>{number}</span>
          <button
            onClick={() => onDeleteContact(id)}
            className="contact__button"
          >
            Delete
          </button>
        </li>
      ))}
    </ContactListGetUp>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
