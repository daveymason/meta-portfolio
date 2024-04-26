import { Box, Button, Typography, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const Hero = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '90vh',
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      id="home"
    >
        <Grid container style={{ position: 'relative', height: '100vh' }}>
            <Grid item xs={2}>
                <img src="/logo.svg" alt="logo" style={{ width: '255px', padding: '20px 30px' }} />
            </Grid>

            <Grid item xs={10}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: '20px 30px',
                    }}>
                    <IconButton
                        aria-label="menu"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        size="large"
                    >
                        <i className="fas fa-bars" style={{ color: '#e7e7e7', fontSize: '1.5rem', backgroundColor:"#495E57", padding: '15px', borderRadius: '50%' }} aria-hidden="true"></i>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component="a" href="#home">Home</MenuItem>
                        <MenuItem onClick={handleClose} component="a" href="#about">About</MenuItem>
                        <MenuItem onClick={handleClose} component="a" href="#contact">Reserve</MenuItem>
                    </Menu>
                    </Box>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'end', 
                    padding: '30px',
                }}
                >
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
        </Grid>
    </Box>
  );
};

export default Hero;