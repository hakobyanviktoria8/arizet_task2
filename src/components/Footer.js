import React from "react";
import logoImage from "./../images/logo.png";
import { Box, Link, Divider, Typography, Container } from "@mui/material";
import { linksData } from "../dataUiPart.js/linksData";

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "40px",
        pb: "28px",
      }}
    >
      <img
        src={logoImage}
        alt="Logo"
        style={{ width: "250px", marginBottom: "32px" }}
      />

      <Box>
        {linksData?.map((link) => (
          <Link
            key={link.id}
            target="_blank"
            href={link.href}
            underline="none"
            variant="variant1Lg"
            sx={link.sx}
          >
            {link.text}
          </Link>
        ))}
      </Box>

      <Divider sx={{ mb: 3, mt: 5, width: "100%" }} />
      <Typography variant="variant3Lg">
        &copy; 2023 Intim Florts | All Rights Reserved.
      </Typography>
    </Container>
  );
};
