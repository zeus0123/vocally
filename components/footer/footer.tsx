import React from 'react';
import { Grid } from '@mui/material';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Grid
      width="80%"
      display="flex"
      flexDirection="column"
      pt="2em"
      margin="0 auto"
    >
      <Grid width="100%" display="flex" justifyContent="space-between">
        <Grid width="70%" style={{ fontWeight: 'bold' }} fontSize='24px'>OPENAUTO</Grid>
        <Grid width="30%" display="flex" justifyContent="space-between">
          <Grid item xs={2}>
            <FaPhoneAlt />
            &nbsp;
            <span>+769 586 4558</span>
          </Grid>
          <Grid alignItems="center" item xs={2}>
            <FaEnvelope style={{ position: "relative", top: "3px" }} />
            &nbsp;
            <span>service@openauto.ca</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        width="100%"
        display="flex"
        justifyContent="space-between"
        pt="2em"
        pb="2em"
      >
        <Grid width="80%">Open Auto @ all rights reserved</Grid>
        <Grid width="20%" display='flex' justifyContent='space-between'>
          <Grid>
            <FaFacebookF />
          </Grid>
          <Grid>
            <FaTwitter />
          </Grid>
          <Grid>
            <FaYoutube />
          </Grid>
          <Grid>
            <FaLinkedin />
          </Grid>
          <Grid>
            <FaInstagram />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;