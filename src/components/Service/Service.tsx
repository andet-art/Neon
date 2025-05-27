import React from "react";
import { Box, Typography, Paper, Grid } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const services = [
  {
    id: 1,
    title: "Making Webpages",
    description:
      "Creating modern, responsive, and user-friendly websites tailored to your business needs.",
    icon: <WebIcon sx={{ fontSize: 60, color: '#1976d2' }} />
  },
  {
    id: 2,
    title: "Software Maintenance",
    description:
      "Providing ongoing support and updates to keep your software running smoothly and securely.",
    icon: <BuildIcon sx={{ fontSize: 60, color: '#1976d2' }} />
  },
  {
    id: 3,
    title: "Hardware Fixing",
    description:
      "Repairing and maintaining your computer hardware to ensure optimal performance.",
    icon: <MemoryIcon sx={{ fontSize: 60, color: '#1976d2' }} />
  },
  {
    id: 4,
    title: "Other Services",
    description:
      "We offer additional services tailored to your specific needs. Contact us to learn more.",
    icon: <MoreHorizIcon sx={{ fontSize: 60, color: '#1976d2' }} />
  },
];

const Service = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#f5f5f5',
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        p: 4
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map(({ id, title, description, icon }) => (
          <Grid item xs={12} sm={6} md={3} key={id} component="div">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
                {icon}
              </Box>
              <Typography variant="h5" component="h2" gutterBottom color="primary.dark">
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
