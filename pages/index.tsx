import Head from 'next/head'
import Image from 'next/image'
import { Header, HomeContent, HomeFooter, Footer } from '../components'
import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vocally</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid width="90%" margin="0 auto">
        <Header />

        {/* Main Content */}
        <Grid container pt="4em">
          <Grid item xs={6}>
            <HomeContent />
          </Grid>
          <Grid item xs={6}>
            <Image src="/image_1.png" alt="hero" width="750" height="550" />
          </Grid>
        </Grid>

        <Grid display="flex" justifyContent="flex-end">
          <Grid padding="0px 10px">
            <FaFacebookF />
          </Grid>
          <Grid padding="0px 10px">
            <FaTwitter />
          </Grid>
          <Grid padding="0px 10px">
            <FaYoutube />
          </Grid>
          <Grid padding="0px 10px">
            <FaLinkedin />
          </Grid>
          <Grid padding="0px 10px">
            <FaInstagram />
          </Grid>
        </Grid>
      </Grid>

      <Grid pt="5em">
        <hr />
      </Grid>

      <Grid width="80%" container margin="0 auto" pt='4em'>
        <Grid item xs={6}>
          <Image src="/image_2.png" alt="hero" width="550" height="550" />
        </Grid>
        <Grid item xs={6}>
          <HomeFooter />
        </Grid>
      </Grid>

      <Grid pt="4em">
        <hr />
      </Grid>

      <Footer />

    </div>
  );
}
