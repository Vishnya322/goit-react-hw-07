import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../redux/contactsSlice';

const nameContacts = selectContacts;
const ContactList = ({ onDelete }) => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact
            data={contact}
            onDelete={onDelete}
            nameContacts={nameContacts}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
