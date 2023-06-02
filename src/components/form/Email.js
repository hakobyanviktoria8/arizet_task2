import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

export const Email = ({ handleFormChange }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email !== "") {
      handleFormChange("password", email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <Box>
      <Typography variant="subtitle3">Add email address</Typography>
      <TextField
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="body3">18 years old</Typography>}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body3">
              I have read and accept the Terms of Service and our Privacy
              Statement.
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};
