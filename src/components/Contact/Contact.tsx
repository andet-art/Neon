// src/components/Contact.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // ← import this

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // ← initialize navigation

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let API_BASE = '';
      if (window.location.hostname === 'localhost') {
        if (window.location.port === '9004' || window.location.port === '5173') {
          API_BASE = '/api';
        } else {
          API_BASE = 'http://localhost/Neon/backend/api';
        }
      } else {
        API_BASE = '/backend/api';
      }

      const res = await fetch(`${API_BASE}/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Server error");
      }

      const responseData = await res.json();
      console.log("Response:", responseData);
      setSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting message:", err);
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5f5f5",
        flex: 1,
        width: "100%",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        color="primary"
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Paper
          sx={{
            p: 4,
            width: "100%",
            maxWidth: "600px",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {submitted ? (
            <>
              <Alert severity="success" sx={{ mt: 2, mb: 3 }}>
                Thank you for your message! We will get back to you soon.
              </Alert>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
              >
                Go to Home
              </Button>
            </>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

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
                  alignSelf: "flex-start",
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
