import { ContactListGetUp } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../../redux/selectors';
import { deleteContact } from 'redux/actions';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const normaliseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normaliseFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactListGetUp>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <span className="contact__name">{name}</span>
          <span>{number}</span>
          <button
            onClick={() => handleDeleteContact(id)}
            className="contact__button"
          >
            Delete
          </button>
        </li>
      ))}
    </ContactListGetUp>
  );
};

export default ContactList;
