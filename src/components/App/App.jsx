import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'view/NomeView';
import SignUp from 'view/SignUp';
import SignIn from 'view/SignIn';
import PhonebookView from 'view/PhonebookView';
import { authOperations } from 'redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <AppBar />

      <Routes>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={SignIn} />
        <Route path="/phonebook" component={PhonebookView} />
      </Routes>

      <ToastContainer autoClose={2000} theme="light" />
    </div>
  );
}
