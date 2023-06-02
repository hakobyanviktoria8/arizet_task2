import React, { useState, useEffect } from "react";
import { Box, InputBase, Typography, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import axios from "axios";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "16px",
  width: "100%",
  border: "1px solid #F76448",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "48px",
  marginTop: "16px",
}));

const LocationBox = styled("div")(() => ({
  position: "absolute",
  background: "white",
  width: "100%",
  zIndex: "10",
  maxHeight: "250px",
  overflowY: "auto",
}));

export const Location = ({ handleFormChange }) => {
  const [searchVal, setSearchVal] = useState("");
  const [location, setLocation] = useState("");
  const [bool, setBool] = useState(false);
  const [locations, setLocations] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);
    setLocation("");
    setBool(false);
  };

  const handleLocationSelect = (item) => {
    setLocation(item);
    setSearchVal(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/locations`, {
          params: {
            search: searchVal,
            skip: 0,
            limit: 10,
            site_key: "no01",
          },
        });

        setLocations(response?.data?.Data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchVal !== "") {
      fetchData();
      if (location === "") {
        setBool(true);
      } else {
        handleFormChange("location", location);
        setBool(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal, apiUrl]);

  return (
    <Box sx={{ position: "relative" }}>
      <Typography variant="subtitle3">Your location</Typography>
      <Typography variant="body2">
        Search location by city, country or zip code
      </Typography>

      <Search>
        <InputBase
          placeholder="London, UK"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearchChange}
          sx={{ width: "100%" }}
          value={searchVal}
        />
        <SearchIcon />
      </Search>

      {locations.length > 0 && bool && (
        <LocationBox>
          {locations.map((item) => (
            <MenuItem key={item} onClick={() => handleLocationSelect(item)}>
              {item}
            </MenuItem>
          ))}
        </LocationBox>
      )}
    </Box>
  );
};
