import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import Welcome from 'components/Wellcome/Welcome';
import SignUp from 'components/SignUp/SignUp';
import SignIn from 'components/SignIn/SignIn';
import Phonebook from 'components/Phonebook/Phonebook';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/phonebook" element={<Phonebook />} />
        </Routes>

        <ToastContainer autoClose={2000} theme="light" />
      </div>
    </>
  );
}
