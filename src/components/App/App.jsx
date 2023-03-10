import { useSelector } from 'react-redux';
import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const contactsRdx = useSelector(state => state.contacts);

  return (
    <div className={styles.container}>
      <ToastContainer autoClose={2000} theme="light" />
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

export default App;
