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

  useEffect(() => {
    if (searchVal !== "") {
      if (location === "") {
        setBool(true);
      } else {
        handleFormChange("location", location);
        setBool(false);
      }
      axios
        .get(`${apiUrl}/locations`, {
          params: {
            search: searchVal,
            skip: 0,
            limit: 10,
            site_key: "no01",
          },
        })
        .then((response) => {
          setLocations(response?.data?.Data);
        })
        .catch((error) => console.log(error));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal, location]);

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
          onChange={(e) => {
            setSearchVal(e.target.value);
            setLocation("");
            setBool(false);
          }}
          sx={{ width: "100%" }}
          value={searchVal}
        />
        <SearchIcon />
      </Search>

      {bool && (
        <LocationBox>
          {locations?.map((item) => (
            <MenuItem
              key={item}
              onClick={() => {
                setLocation(item);
                setSearchVal(item);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </LocationBox>
      )}
    </Box>
  );
};
