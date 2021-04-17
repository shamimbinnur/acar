import React from 'react'
// import useStyles from './useStylesLogin';
import { makeStyles } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import {
    Container,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signIn:{
    color : "#bd1522",
  },
  container:{
    marginTop: "30px",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "5px 20px 20px 20px",
    maxWidth: "350px",
  },

}));


const AdminLogin= ()=> {
    const classes = useStyles();

    return(
        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography className={classes.signIn} style={{fontSize:"30px"}} component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="username"
                name="username"
                autoComplete="username"
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
                className={classes.submit}
                style={{backgroundColor:"#2c2e83", color: "#fafafa",}}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      );
}

export default AdminLogin