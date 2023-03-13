import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { selectors } from 'redux/contacts';

// import styles from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    const normalizedName = value.name.toLowerCase();
    const normalizedPhone = value.number.toLowerCase();
    if (
      contacts.find(contact => normalizedName === contact.name.toLowerCase())
    ) {
      return toast.error(`${value.name} is already in contacts`);
    }

    const contactNumber = contacts.find(
      contact => normalizedPhone === contact.phone.toLowerCase()
    );
    if (contactNumber) {
      return toast.error(
        `${value.phone} is already belong to ${contactNumber.name}`
      );
    }
    dispatch(addContact({ name, number }));
    toast.success('Contacts added');
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h5">
            Add new contact
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                  value={name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  type="tel"
                  label="Phone number"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  autoComplete="number"
                  onChange={handleChange}
                  value={number}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <div className={styles.formContainer}>
    //     <label className={styles.formLabel}>
    //       Name
    //       <input
    //         className={styles.formInput}
    //         type="text"
    //         name="name"
    //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //         value={name}
    //         onChange={handleChange}
    //         placeholder="Input name of contact"
    //       />
    //     </label>
    //     <label className={styles.formLabel}>
    //       Number
    //       <input
    //         className={styles.formInput}
    //         type="tel"
    //         name="phone"
    //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //         required
    //         value={phone}
    //         onChange={handleChange}
    //         placeholder="Input telephone number"
    //       />
    //     </label>
    //     <button className={styles.formBtn} type="submit">
    //       Add contact
    //     </button>
    //   </div>
    // </form>
  );
};

export default Form;
