import { useSelector } from 'react-redux';
import styles from './phonebookView.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

const PhonebookView = () => {
  const contactsRdx = useSelector(state => state.contacts);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.wrap}>
        {contactsRdx.length === 0 ? (
          <p>Your contacts list is empty</p>
        ) : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </div>
    </div>
  );
};

export default PhonebookView;
