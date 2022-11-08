import React from 'react';
import { Grid, TextField } from '@mui/material';
import { HeroSubTitle, HeroTitle } from './home-content.style';
import { styled } from '@mui/material/styles';
import StyledButton from '../core/Button/Button.style';

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#909398",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#909398",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#909398",
    },
    "&:hover fieldset": {
      borderColor: "#909398",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#909398",
    },
  },
});

const HomeContent = () => {
  return (
    <Grid container pt="4rem">
      <HeroTitle>
        Vechicle Maintainance <br /> From The Comfort of <br /> Your Home
      </HeroTitle>
      <HeroSubTitle>
        Open Auto Soothes the hassle of maintaining your vechicle and helps you
        deal with unexpected repairs worry-free.
      </HeroSubTitle>
      <Grid display="flex" flexDirection="column">
        <Grid padding="0px 0px 15px">
          <CssTextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            style={{
              borderColor: "#909398",
            }}
          />
        </Grid>
        <Grid padding="0px 0px 15px">
          <CssTextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            style={{
              borderColor: "#909398",
            }}
          />
        </Grid>
        <Grid>
          <StyledButton
            buttonColor="#909398"
            borderColor="#909398"
            variant="outlined"
          >
            Submit
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeContent;