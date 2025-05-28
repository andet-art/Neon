import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Collapse } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './service.css';

const services = [
  {
    id: 1,
    title: "Making Webpages",
    details: "We design sleek, SEO-optimized websites using modern frameworks like React and Next.js, customized to your branding and goals. We ensure full responsiveness, accessibility, and performance best practices for better user engagement.",
    icon: <WebIcon className="service-icon" />
  },
  {
    id: 2,
    title: "Software Maintenance",
    details: "Our team provides long-term software lifecycle support, including proactive monitoring, patching vulnerabilities, improving UX, and upgrading libraries to ensure stability and longevity.",
    icon: <BuildIcon className="service-icon" />
  },
  {
    id: 3,
    title: "Hardware Fixing",
    details: "We handle everything from component-level diagnostics to upgrades, thermal optimization, and preventative care. Our skilled technicians ensure your systems remain reliable and efficient.",
    icon: <MemoryIcon className="service-icon" />
  },
  {
    id: 4,
    title: "Other Services",
    details: "We offer IT consulting, cybersecurity assessments, staff training, and custom automation solutions. Tailored services ensure you meet unique operational goals and growth milestones.",
    icon: <MoreHorizIcon className="service-icon" />
  },
];

const Service = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Box className="service-container">
      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary" sx={{ mb: 4 }}>
        Explore Our Comprehensive Service Offerings
      </Typography>

      <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto 24px' }}>
        Our expert solutions are tailored to empower businesses and individuals with reliable, innovative, and secure technology services.
        We blend modern development practices with hands-on technical experience to solve complex problems.
      </Typography>

      <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        Whether you need a new website, software support, hardware repair, or a personalized tech solution, our team is ready to deliver with precision and passion.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map(({ id, title, icon, details }) => (
          <Grid item xs={12} sm={6} md={6} key={id}>
            <Paper
              elevation={3}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="service-card"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <Box className="icon-container">
                {icon}
              </Box>
              <Typography variant="h5" component="h2" gutterBottom color="primary.dark">
                {title}
              </Typography>
              <Collapse in={hovered === id}>
                <Box className="hover-details">
                  <Typography variant="body2" color="textSecondary">
                    {details}
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;