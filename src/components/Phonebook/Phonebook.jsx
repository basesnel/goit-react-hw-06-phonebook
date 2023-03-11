import React from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import initContacts from './contacts.json';

import { PhonebookSection } from './Phonebook.styled';

class Phonebook extends React.Component {
  state = {
    contacts: initContacts,
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const contacts = this.state.contacts;

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

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const normaliseFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseFilter)
    );

    return (
      <PhonebookSection>
        <h2 className="title">Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </PhonebookSection>
    );
  }
}

export default Phonebook;
