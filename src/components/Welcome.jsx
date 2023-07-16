import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserService from "../services/UserService";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: '#ff9800',
    '&:hover': {
      backgroundColor: '#f57c00',
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        To access your account, please authenticate.
      </Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => UserService.doLogin()}
        >
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
