import React from 'react';
import { Grid } from '@mui/material';
import { HeroSubTitle, HeroTitle } from '../home-content/home-content.style';
import StyledButton from '../core/Button/Button.style';

function HomeFooter() {
  return (
    <Grid container pt="4rem">
      <HeroTitle>
        Focused on <br /> Time Saving
      </HeroTitle>
      <HeroSubTitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </HeroSubTitle>
      <StyledButton padding='5px 30px' variant="outlined">Download the mobile app</StyledButton>
    </Grid>
  )
}

export default HomeFooter;