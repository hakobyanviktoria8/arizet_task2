import { Divider, Link, Typography } from "@mui/material";
import React from "react";

export const HaveAccount = () => {
  return (
    <>
      <Divider sx={{ mb: 3, width: "100%" }} />
      <Typography
        variant={{ xs: "body2", sm: "body1" }}
        color="text.secondary"
        textAlign="center"
        display="block"
      >
        Already have an account?
        <Link color="secondary.main" href="/" textDecoration="none">
          {" "}
          Log In
        </Link>
      </Typography>
    </>
  );
};
