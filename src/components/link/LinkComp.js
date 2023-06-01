import { Link } from "@mui/material";
import React from "react";

export const LinkComp = ({ link, variant }) => {
  return (
    <Link
      target="_blank"
      href={link.href}
      underline="none"
      variant={{ xs: "body3", sm: "body1" }}
      sx={link.sx}
    >
      {link.text}
    </Link>
  );
};
