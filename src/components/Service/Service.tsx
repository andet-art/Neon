import React from "react";
import { Box, Typography, Paper } from '@mui/material';

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and modern websites tailored to your business needs.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for both Android and iOS platforms.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and engaging user experiences for your products.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Offering scalable and secure cloud infrastructure to boost your operations.",
  },
];

const Service = () => {
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
      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
        Our Services
      </Typography>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          flex: 1,
          width: '100%'
        }}
      >
        {services.map(({ id, title, description }) => (
          <Paper
            key={id}
            sx={{
              p: 3,
              height: '100%',
              bgcolor: 'white',
              borderRadius: 2,
              boxShadow: 1,
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: 4,
              },
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom color="primary.dark">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
