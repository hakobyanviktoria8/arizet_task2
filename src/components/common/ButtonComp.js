import { Button } from "@mui/material";
import React from "react";

export const ButtonComp = ({
  children,
  disabled,
  size,
  variant,
  sx,
  color,
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};
