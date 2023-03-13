import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                type="text"
                required
                fullWidth
                id="name"
                label="Find contacts by name"
                autoFocus
                onChange={({ currentTarget }) =>
                  dispatch(setFilter(currentTarget.value))
                }
                value={filterRdx}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
