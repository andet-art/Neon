import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Collapse,
  Button,
  Divider,
  Tooltip,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import MemoryIcon from "@mui/icons-material/Memory";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import "./service.css";
import { ForkLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "/service.jpg"
import { Outlet } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Making Webpages",
    route: "/dashboard/webpages",
    details:
      "We design sleek, SEO-optimized websites using modern frameworks like React and Next.js...",
    icon: <WebIcon className="service-icon" />,
  },
  {
    id: 2,
    title: "Software Maintenance",
    route: "/dashboard/software-maintenance",
    details:
      "Our team provides long-term software lifecycle support...",
    icon: <BuildIcon className="service-icon" />,
  },
  {
    id: 3,
    title: "Hardware Fixing",
    route: "/dashboard/hardware-maintenance",
    details:
      "We handle everything from component-level diagnostics to upgrades...",
    icon: <MemoryIcon className="service-icon" />,
  },
  {
    id: 4,
    title: "Other Services",
    route: "/dashboard/other",
    details:
      "We offer IT consulting, cybersecurity assessments, staff training...",
    icon: <MoreHorizIcon className="service-icon" />,
  },
  {
    id: 7,
    title: "Device Setup",
    route: "/dashboard/service/devices",
    details:
      "From smart home configurations to enterprise hardware deployments...",
    icon: <DevicesOtherIcon className="service-icon" />,
  },
];

const Service = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box className="service-container">
      <h2 style={{
        alignItems: "center",
        marginLeft:"18rem",
        marginBottom: "2rem",
      }}>Explore Our Comprehensive Service Offerings</h2>
      <p>
        Our expert solutions are tailored to empower businesses and individuals with reliable, innovative, and secure technology services.
      </p>

      <p style={{
        marginBottom: "2rem",
      }}>
        Whether you need a new website, software support, hardware repair, or a personalized tech solution, our team is ready to deliver with precision and passion.
      </p>
      <img src="/service.jpg" alt="Service Intro" className="service-intro-image" />

      <Divider className="service-divider" />

      <Grid container spacing={4} justifyContent="center" className="services-grid">
        {services.map(({ id, title, icon, details, route }) => (
  <Grid item xs={12} sm={6} md={4} key={id}>
    <Paper
      elevation={6}
      className="service-card"
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <Box className="icon-container">
        <Tooltip title={title} arrow>
          {icon}
        </Tooltip>
      </Box>

      <Typography className="service-card-title" component="h2" gutterBottom>
        {title}
      </Typography>

      <Collapse in={hovered === id}>
        <Box className="hover-details">
          <Typography variant="body2" color="textSecondary">
            {details}
          </Typography>
        </Box>
      </Collapse>

      <Link to={route} style={{ textDecoration: "none" }}>
        <Button className="service-card-button">
          Learn More
        </Button>
      </Link>
    </Paper>
  </Grid>
))}

       
      </Grid>

      <Box className="service-contact">
        <Typography className="service-contact-title" gutterBottom style={{
          marginLeft:"49.5rem",
          marginTop: "2rem",
          
        }}>
          Still Have Questions?
        </Typography>
        <Typography className="service-contact-text" style={{
          marginLeft:"39rem",
          
          
        }}>
          Reach out to us for custom inquiries, quotes, or to schedule a consultation. Our support team is ready to assist you.
        </Typography>
        <Link to="/dashboard/contact">
        <Button className="service-contact-button" style={{
          marginLeft:"52rem",
          marginTop: "2rem",
          backgroundColor: "#484870",
          color: "#fff",
          
        }}>
          Contact Us
        </Button>
              
        </Link>
      </Box>
<Outlet/>
    </Box>
  );
};

export default Service;
