import React from "react";
import logoImage from "./../../images/logo.png";
import { Avatar } from "@mui/material";

export const Logo = ({ sx }) => {
  return (
    <Avatar
      src={logoImage}
      alt="Logo"
      sx={sx}
      variant="square"
      className="logo"
    />
  );
};
