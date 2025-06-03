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

const services = [
  {
    id: 1,
    title: "Making Webpages",
    details:
      "We design sleek, SEO-optimized websites using modern frameworks like React and Next.js, customized to your branding and goals. We ensure full responsiveness, accessibility, and performance best practices for better user engagement.",
    icon: <WebIcon className="service-icon" />,
  },
  {
    id: 2,
    title: "Software Maintenance",
    details:
      "Our team provides long-term software lifecycle support, including proactive monitoring, patching vulnerabilities, improving UX, and upgrading libraries to ensure stability and longevity.",
    icon: <BuildIcon className="service-icon" />,
  },
  {
    id: 3,
    title: "Hardware Fixing",
    details:
      "We handle everything from component-level diagnostics to upgrades, thermal optimization, and preventative care. Our skilled technicians ensure your systems remain reliable and efficient.",
    icon: <MemoryIcon className="service-icon" />,
  },
  {
    id: 4,
    title: "Other Services",
    details:
      "We offer IT consulting, cybersecurity assessments, staff training, and custom automation solutions. Tailored services ensure you meet unique operational goals and growth milestones.",
    icon: <MoreHorizIcon className="service-icon" />,
  },
  {
    id: 5,
    title: "24/7 Support",
    details:
      "Our dedicated support team is available around the clock to resolve technical issues, answer questions, and provide guidance to keep your business running smoothly.",
    icon: <SupportAgentIcon className="service-icon" />,
  },
  {
    id: 6,
    title: "Cybersecurity",
    details:
      "We offer security audits, firewall setups, phishing prevention training, and network hardening to protect your organization from modern cyber threats.",
    icon: <SecurityIcon className="service-icon" />,
  },
  {
    id: 7,
    title: "Device Setup",
    details:
      "From smart home configurations to enterprise hardware deployments, we ensure seamless integration and optimal setup of your devices.",
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

      <Divider className="service-divider" />

      <Grid container spacing={4} justifyContent="center" className="services-grid">
        {services.map(({ id, title, icon, details }) => (
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

              <Button className="service-card-button">
                Learn More
              </Button>
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
    </Box>
  );
};

export default Service;
