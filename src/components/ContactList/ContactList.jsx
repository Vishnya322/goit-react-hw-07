import { createSelector } from 'reselect';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

// Створюємо селектор для вибірки контактів зі списку і фільтрування їх
const selectContacts = state => state.contacts.items;
const selectSearchTerm = state => state.filters.name.toLowerCase();

const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchTerm],
  (contacts, searchTerm) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm)
    );
  }
);

const ContactList = ({ onDelete }) => {
  // Використовуємо створений селектор для отримання відфільтрованих контактів
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
