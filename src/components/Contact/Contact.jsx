import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // Відправляємо екшен для видалення контакту з відповідним id
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.cardContainer}>
      <div className={css.cardBox}>
        <div className={css.iconBox}>
          <ImUser className={css.icon} />
          <p className={css.nameClient}>{name}</p>
        </div>
        <div className={css.iconBox}>
          <ImPhone className={css.icon} />
          <p className={css.namberClient}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
