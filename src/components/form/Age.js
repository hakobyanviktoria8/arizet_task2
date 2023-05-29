import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { generateOptions, generateYearOptions } from "../../helpers/DateUtils";

export const Age = ({ handleFormChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") {
      setDay(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  useEffect(() => {
    if (day && month && year) {
      const formattedDob = `${year}-${month}-${day}`;
      handleFormChange("DOB", formattedDob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  return (
    <Box>
      <Typography variant="subtitle3">Your age</Typography>
      <Typography variant="body2">
        You must be at least 18 years old to use Intim Flort
      </Typography>

      <Box sx={{ display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="day-label">Day</InputLabel>
          <Select
            labelId="day-label"
            id="day-select"
            name="day"
            value={day}
            label="Day"
            onChange={handleChange}
          >
            {generateOptions(31)}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="month-label">Month</InputLabel>
          <Select
            labelId="month-label"
            id="month-select"
            name="month"
            value={month}
            label="Month"
            onChange={handleChange}
          >
            {generateOptions(12)}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year-select"
            name="year"
            value={year}
            label="Year"
            onChange={handleChange}
          >
            {generateYearOptions()}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
