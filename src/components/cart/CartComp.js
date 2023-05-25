import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "250px",
  textAlign: "center",
  margin: "100px 40px 80px",
}));

const CircleContainer = styled(Box)(({ theme }) => ({
  width: "64px",
  height: "64px",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginBottom: "24px",
}));

export const CartComp = ({ Icon, text }) => {
  return (
    <Container>
      <CircleContainer>
        <Icon color="secondary" fontSize="large" />
      </CircleContainer>
      <Typography variant="variant1Lg">{text}</Typography>
    </Container>
  );
};
