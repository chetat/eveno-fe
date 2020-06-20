import React, { useState, useRef, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import * as EmailValidator from 'email-validator';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Eveno
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignInSide() {
  // we use the help of useRef to test if it's the first render
  const initRender = useRef(true);

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disabled, setDisabled] = useState(null)

  //Initial values for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Errors Message State
  const [formError, setFormError] = useState('');


  //Snackbar States
  const [snackOpen, setSnackOpen] = useState(false);

  //Fields validation
  useEffect(() => {
    if (initRender.current) {
      initRender.current = false;
      return;
    }
    // here we can disable/enable the save button by wrapping the setState function
    // in a call to the validation function which returns true/false
    setDisabled(formInvalid())

  })

  //Validate form fields
  const formInvalid = () => {
    if (email === "" || !EmailValidator.validate(email)) {
      setFormError("Invalid Email")
      return true;
    }else if (password === "" || password.length < 6) {
      setFormError("Password too short. Requires more than 6 characters")
      return true;
    }
    return false;
  }

//Handle error messages 
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setSnackOpen(false);
};

const handleLogin = (e) => {
  e.preventDefault()
}

const classes = styles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {formError && (
          <Snackbar open={snackOpen}
           autoHideDuration={4000}
           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
           onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {formError}
            </Alert>
          </Snackbar>)}
        
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={ e => setEmail(e.target.value) }
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={ e => setPassword(e.target.value) }
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={disabled}

              className={classes.submit}
            >
              Sign In
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
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}