import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";

export const Username = ({ handleFormChange }) => {
  const [username, setUsername] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.post(
          `${apiUrl}/start`,
          { username },
          {
            params: {
              site_key: "no01",
            },
          }
        );
        console.log(111111111111, request?.data?.Data);
      } catch (error) {
        console.log(11111111222, error);
      }
    };

    if (username !== "") {
      fetchData();
      handleFormChange("username", username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography variant="subtitle3">Create a username</Typography>
      <TextField
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="User name"
        type="text"
      />
    </Box>
  );
};
