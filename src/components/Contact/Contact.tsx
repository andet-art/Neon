import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, Alert } from '@mui/material';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        Contact Us
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <Paper
          sx={{
            p: 4,
            width: '100%',
            maxWidth: '600px',
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          {submitted ? (
            <Alert severity="success" sx={{ mt: 2 }}>
              Thank you for your message! We will get back to you soon.
            </Alert>
          ) : (
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
              }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                variant="outlined"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ 
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  alignSelf: 'flex-start'
                }}
              >
                Send Message
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
