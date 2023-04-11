import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { PhonebookSection } from './Phonebook.styled';

export default function Phonebook() {
  return (
    <PhonebookSection>
      <h2 className="title">Phonebook</h2>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </PhonebookSection>
  );
}
