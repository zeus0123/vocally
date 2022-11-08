import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { HeroSubTitle, HeroTitle } from './home-content.style';
import StyledButton from '../core/Button/Button.style';
import StyledInput from '../core/Input/Input.style';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Toast, { AlertColor } from '../core/Toast/Toast';

const HomeContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [action, setAction] = useState<AlertColor>('success');

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    if(!name || !email) {
      setLoading(false);
      setMessage('Please provide email and name');
      setAction('error');
      setOpen(true);
      return;
    }

    if(name.length > 100) {
      setLoading(false);
      setMessage('Please enter a name below 100 characters');
      setAction('error');
      setOpen(true);
      return;
    }

    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) {
      setLoading(false);
      setMessage('Please provide a valid email address');
      setAction('error');
      setOpen(true);
      return;
    }

    axios.post(`${window.location.protocol}//${window.location.hostname}:3000/api/lead`, {
      name,
      email
    }).then(res => {
      console.log(res.data);
      if(res.data.success) {
        setLoading(false);
        setName('');
        setEmail('');
        setMessage('Form successfully submitted!');
        setAction('success');
        setOpen(true);
      }
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })
  }
  return (
    <Grid width="100%" xs sm container pt="4rem">
      <HeroTitle width="100%">
        Vechicle Maintenance <br /> From The Comfort of <br /> Your Home
      </HeroTitle>
      <HeroSubTitle>
        Open Auto Soothes the hassle of maintaining your vechicle and <br />{" "}
        helps you deal with unexpected repairs worry-free.
      </HeroSubTitle>
      <Grid width="100%" display="flex" flexDirection="column" mt="20px">
        <Grid width="50%" padding="0px 0px 15px">
          <StyledInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Grid>
        <Grid width="50%" padding="0px 0px 15px">
          <StyledInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Grid>
        <Grid justifyContent="center" textAlign="center" width="50%">
          {loading ? (
            <CircularProgress />
          ) : (
            <StyledButton
              buttoncolor="#909398"
              bordercolor="#909398"
              variant="outlined"
              fullWidth
              padding="10px"
              onClick={handleSubmit}
            >
              Submit
            </StyledButton>
          )}
        </Grid>
      </Grid>
      <Toast 
        open={open}
        message={message}
        action={action}
        handleClose={handleClose}
      />
    </Grid>
  );
};

export default HomeContent;