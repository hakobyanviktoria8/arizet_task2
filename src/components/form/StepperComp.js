import React from "react";
import { Box, styled } from "@mui/material";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const RangeBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "4px",
  background: "#E5E8EB",
  borderRadius: "2px",
}));

export const StepperComp = ({ active }) => {
  const widthStep = 5 + (active * 100) / 6;
  console.log(active, `${widthStep}px`);

  return (
    <Box>
      <Box>
        <WcOutlinedIcon />
        <CakeOutlinedIcon />
        <FmdGoodOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        <LockOutlinedIcon />
        <EmailOutlinedIcon />
      </Box>

      <RangeBox>
        <Box
          width={`${widthStep}%`}
          height="4px"
          sx={{ background: "#FFDC22" }}
        />
      </RangeBox>
    </Box>
  );
};
