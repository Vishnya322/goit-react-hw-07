import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import initialContacts from './contact.json';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return initialContacts;
  });

  const [filter, setFilter] = useState(''); //фільтрація

  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId); //видалення
    });
  };

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={css.container}>
      <h1 className={css.nameBook}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
