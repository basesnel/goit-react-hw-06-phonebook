import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
// import initContacts from './contacts.json';

import { PhonebookSection } from './Phonebook.styled';

import useLocalStorage from 'components/hooks/useLocalStorage';

export default function Phonebook() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useLocalStorage('filter', '');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const { name, number } = data;
    const contactsToCopy = contacts;

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

    setContacts([contact, ...contactsToCopy]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
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
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </PhonebookSection>
  );
}
