import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 6,
        bgcolor: "#1a1a2e",
        color: "#e0e0f8",
        borderRadius: 0,
        px: { xs: 2, sm: 3, md: 4 },
        mx: 0,
        width: "100%",
      }}
    >
      {/* Grid container must define columns */}
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} spacing={4}>
        {/* Use span instead of item+xs/md/etc. */}
        <Grid span={{ xs: 12, md: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "700", mb: 1 }}>
            Neon Tech Solutions
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
            Empowering Tetovo and beyond with cutting-edge tech services,
            hardware repairs, and software solutions.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
              <IconButton
                key={i}
                size="small"
                sx={{
                  color: "#e0e0f8",
                  bgcolor: "rgba(224,224,248,0.1)",
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Each column section should use span */}
        <Grid span={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "600", mb: 1 }}>
            Services
          </Typography>
          <List dense disablePadding>
            {[
              "Web Development",
              "Internet Installation",
              "Hardware Repairs",
              "Software Solutions",
            ].map((service) => (
              <ListItem key={service} disableGutters disablePadding>
                <Button
                  color="inherit"
                  sx={{
                    opacity: 0.8,
                    textAlign: "left",
                    justifyContent: "flex-start",
                    px: 0,
                  }}
                >
                  {service}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid span={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "600", mb: 1 }}>
            Support
          </Typography>
          <List dense disablePadding>
            {["Contact Us", "FAQs", "Technical Support", "Network Status"].map(
              (item) => (
                <ListItem key={item} disableGutters disablePadding>
                  <Button
                    color="inherit"
                    sx={{
                      opacity: 0.8,
                      textAlign: "left",
                      justifyContent: "flex-start",
                      px: 0,
                    }}
                  >
                    {item}
                  </Button>
                </ListItem>
              )
            )}
          </List>
        </Grid>

        <Grid span={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "600", mb: 1 }}>
            Company
          </Typography>
          <List dense disablePadding>
            {["About Us", "Careers", "News", "Sustainability"].map((item) => (
              <ListItem key={item} disableGutters disablePadding>
                <Button
                  color="inherit"
                  sx={{
                    opacity: 0.8,
                    textAlign: "left",
                    justifyContent: "flex-start",
                    px: 0,
                  }}
                >
                  {item}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid span={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "600", mb: 1 }}>
            Legal
          </Typography>
          <List dense disablePadding>
            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "Compliance",
            ].map((item) => (
              <ListItem key={item} disableGutters disablePadding>
                <Button
                  color="inherit"
                  sx={{
                    opacity: 0.8,
                    textAlign: "left",
                    justifyContent: "flex-start",
                    px: 0,
                  }}
                >
                  {item}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "rgba(224,224,248,0.1)" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Neon Tech Solutions. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Sitemap", "Accessibility", "Cookie Settings"].map((item) => (
            <Button
              key={item}
              color="inherit"
              size="small"
              sx={{ opacity: 0.7 }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
