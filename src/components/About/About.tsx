import React from "react";
import { Box, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f5f5f5',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <Box 
        sx={{ 
          p: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Paper
          sx={{
            p: 4,
            maxWidth: '800px',
            width: '100%',
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
            About Us
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Welcome to our company! We are dedicated to providing the best products
            and services to our customers. Our team is passionate about innovation,
            quality, and customer satisfaction.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Founded in 2025, we have quickly grown into a trusted brand thanks to
            our commitment to excellence and our community-focused approach.
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Thank you for visiting our website. We look forward to serving you and
            helping you achieve your goals.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
