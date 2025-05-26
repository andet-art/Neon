import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const categories = [
  { id: 1, name: 'Category 1', description: 'Description for category 1' },
  { id: 2, name: 'Category 2', description: 'Description for category 2' },
  { id: 3, name: 'Category 3', description: 'Description for category 3' },
];

const Categories: React.FC = () => {
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
      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Categories
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            flex: 1,
            width: '100%'
          }}
        >
          {categories.map((category) => (
            <Paper
              key={category.id}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
                bgcolor: 'white',
                borderRadius: 2
              }}
            >
              <Typography variant="h6" gutterBottom>
                {category.name}
              </Typography>
              <Typography color="textSecondary">
                {category.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
