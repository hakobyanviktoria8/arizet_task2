import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { linksData } from "../dataUiPart.js/linksData";
import { LinkComp } from "./link/LinkComp";
import { Logo } from "./common/Logo";

export const Footer = () => {
  return (
    <Box
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
      <Logo sx={{ width: "250px", margin: "auto", mb: "32px" }} />

      <Box>
        {linksData?.map((link) => (
          <LinkComp key={link.id} link={link} />
        ))}
      </Box>

      <Divider sx={{ mb: 3, mt: 5, width: "100%" }} />
      <Typography variant="body3">
        &copy; 2023 Intim Florts | All Rights Reserved.
      </Typography>
    </Box>
  );
};
