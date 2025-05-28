import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Collapse, Button, Divider, Tooltip } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
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
  {
    id: 5,
    title: "24/7 Support",
    details: "Our dedicated support team is available around the clock to resolve technical issues, answer questions, and provide guidance to keep your business running smoothly.",
    icon: <SupportAgentIcon className="service-icon" />
  },
  {
    id: 6,
    title: "Cybersecurity",
    details: "We offer security audits, firewall setups, phishing prevention training, and network hardening to protect your organization from modern cyber threats.",
    icon: <SecurityIcon className="service-icon" />
  },
  {
    id: 7,
    title: "Device Setup",
    details: "From smart home configurations to enterprise hardware deployments, we ensure seamless integration and optimal setup of your devices.",
    icon: <DevicesOtherIcon className="service-icon" />
  }
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

      <Divider variant="middle" sx={{ my: 4 }} />

      <Grid container spacing={4} justifyContent="center">
        {services.map(({ id, title, icon, details }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Paper
              elevation={6}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="service-card"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 3 }}
            >
              <Box className="icon-container">
                <Tooltip title={title} arrow>
                  {icon}
                </Tooltip>
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
              <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Still Have Questions?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '700px', margin: '0 auto 20px' }}>
          Reach out to us for custom inquiries, quotes, or to schedule a consultation. Our support team is ready to assist you.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Service;
