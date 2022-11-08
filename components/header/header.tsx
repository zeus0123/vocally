import { Grid, Button } from '@mui/material';
import React from 'react';
import StyledButton from '../core/Button/Button.style';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {

  return (
    <Grid width="100%" display="flex" alignItems="center" container pt="2em">
      <Grid
        fontSize="24px"
        style={{ fontWeight: "bold" }}
        display="flex"
        item
        xs={12}
        md={6}
      >
        PENAUTO
      </Grid>
      <Grid sx={{ display: { xl: 'block', xs: 'none' }}} item xs={2}>
        <FaPhoneAlt />
        &nbsp; 
        <span>+769 586 4558</span>
      </Grid>
      <Grid sx={{ display: { xl: 'block', xs: 'none' }}} alignItems='center' item xs={2}>
        <FaEnvelope style={{position: 'relative', top: '3px'}}/>
        &nbsp;  
        <span>service@openauto.ca</span>
      </Grid>
      <Grid sx={{ display: { xl: 'block', xs: 'none' }}} display="flex" justifyContent="flex-end" item xs={2}>
        <StyledButton variant="outlined">Download the mobile app</StyledButton>
      </Grid>

    </Grid>
  );
}

export default Header