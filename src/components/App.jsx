import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import initialContacts from './contact.json';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader';
import Error from './Error';

import { selectLoading, selectError } from '../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [contacts, setContacts] = useState(() => {
    return initialContacts;
  });

  const [filter, setFilter] = useState('');

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
      {error && <Error>Error!!!</Error>}
      {loading && <Loader>Loading message</Loader>}
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
