import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export const Gender = ({ handleFormChange }) => {
  const [gender, setGender] = useState("");
  const [looking, setLooking] = useState("");
  const [lookingFor, setLookingFor] = useState("");

  const handleLookingFor = () => {
    if (gender === "Female" && looking === "Male") {
      setLookingFor("Female_looking_for_male");
    } else if (gender === "Female" && looking === "Female") {
      setLookingFor("Female_looking_for_female");
    } else if (gender === "Male" && looking === "Female") {
      setLookingFor("Male_looking_for_female");
    } else if (gender === "Male" && looking === "Male") {
      setLookingFor("Male_looking_for_male");
    }
  };

  useEffect(() => {
    if (gender !== "") {
      handleFormChange("gender", gender);
    }
    handleLookingFor();
    if (lookingFor !== "") {
      handleFormChange("looking_for", lookingFor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, looking, lookingFor]);

  return (
    <Box>
      <Box>
        <Typography variant="subtitle3">Your gender</Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setGender("Female")}
          >
            Female
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={() => setGender("Male")}
          >
            Male
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle3">You are interested in</Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setLooking("Female")}
          >
            Female
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={() => setLooking("Male")}
          >
            Male
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
