import React from 'react';
import { Box, Typography, Avatar, Grid, Card, CardMedia, Button } from '@mui/material';

const About = ({ id, title }) => (
  <Grid container style={{ position: 'relative', height: '80vh', backgroundColor: '#e7e7e7', alignItems: 'center' }}  id="about">
    <Grid item xs={1} sx={{pl:5, pt:5}} alignSelf={'flex-start'}>
          <Avatar src="/teaIcon.png" alt="logo" sx={{ width: 72, height: 72 }} />
    </Grid>
    <Grid item xs={5} sx={{pt:5}}>
        <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', fontFamily: 'Markazi Text, serif !important' }}>
        {title}
        </Typography>
      <Box component="section" id={id} sx={{ textAlign: 'left', mt:3, p:2, pl:0, pt:0 }}>
        <Typography variant="body1" sx={{ fontFamily: 'Karla, serif !important', fontSize: '1.5rem', color: '#333'}}>
          Little Lemon is a charming beach side Asian restaurant that serves simple food and authentic ice tea.
        </Typography>
      </Box>
      <Box component="section" id={id} sx={{ textAlign: 'left', p:4, pt:0, pl:0 }}>
        <Typography variant="body1" sx={{ fontFamily: 'Karla, serif !important', fontSize: '1.5rem', color: '#333'}}>
          We offer a locally sourced menu with daily specials.
        </Typography>
      </Box>
        <Box component="section" id={id} sx={{ textAlign: 'left' }}>
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: '#495E57',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#FFC107',
                    },
                    }}
                    href="#contact"
                >
                    Book A Table {" "} <i className="fas fa-arrow-right"></i>
                </Button>
        </Box>
    </Grid>
    <Grid item xs={6} sx={{mt:5}}>
      <Grid container spacing={2} sx={{ p: 5 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/1600x900/?authentic-lemon-tea&sig=${index}`}
                alt="Random Image"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default About;
