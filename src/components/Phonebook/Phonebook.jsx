import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { PhonebookSection } from './Phonebook.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/actions';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normaliseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normaliseFilter)
  );

  return (
    <PhonebookSection>
      <h2 className="title">Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </PhonebookSection>
  );
}
