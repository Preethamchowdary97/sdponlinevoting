import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SuccessMessage({ username }) {
  return (
    <Typography variant="body2" color="text.primary" align="center">
      Welcome, {username}! You have successfully logged in.
    </Typography>
  );
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust the primary color
    },
  },
});

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      const username = response.data.username;
      setSuccessMessage(`Welcome, ${username}! You have successfully logged in.`);
      navigate('/', { state: { username } });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('You have already casted your vote');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white', // Set background color
            padding: '40px', // Add padding
            borderRadius: '10px', // Add border radius
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
            backgroundImage: `url('path_to_your_image.jpg')`, // Add background image
            backgroundSize: 'cover', // Adjust background size
            backgroundPosition: 'center', // Adjust background position
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Sign in
          </Typography>
          {errorMessage && (
            <Typography variant="body2" color="error" align="center" sx={{ marginBottom: 2 }}>
              {errorMessage}
            </Typography>
          )}
          {successMessage && <SuccessMessage username={formData.email} />}
          {!successMessage && (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
