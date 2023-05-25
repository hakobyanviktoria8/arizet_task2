import { Link } from "@mui/material";
import React from "react";

export const LinkComp = ({ href = "", sx, text }) => {
  return (
    <Link
      target="_blank"
      href={href}
      underline="none"
      variant="variant1Lg"
      sx={sx}
    >
      {text}
    </Link>
  );
};
