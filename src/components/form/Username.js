import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../common/Input";

export const Username = ({ handleFormChange }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_]{0,12}$/;

    if (regex.test(value)) {
      setUsername(value);
    }
  };

  useEffect(() => {
    if (username !== "" && username.length > 2) {
      handleFormChange("username", username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        Create a username
      </Typography>

      <Input
        value={username}
        handleChange={handleChange}
        placeholder="User name"
        type="text"
      />
    </Box>
  );
};
