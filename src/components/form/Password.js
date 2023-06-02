import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";

export const Password = ({ handleFormChange }) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (password !== "") {
      handleFormChange("password", password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <Box>
      <Typography variant="subtitle3">Create a password</Typography>
      <TextField
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        // autoComplete="current-password"
      />
    </Box>
  );
};
