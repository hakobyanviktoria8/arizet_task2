import { Button } from "@mui/material";
import React from "react";

export const ButtonComp = ({ text, disabled, sx, onClick }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        height: "48px",
        width: "100%",
        fontSize: "18px",
      }}
    >
      {text}
    </Button>
  );
};
