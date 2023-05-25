import React from "react";
import backgroundImage from "./../images/bg-main.png";
import { Container } from "@mui/material";
import { CartsWrapper } from "./cart/CartsWrapper";

const myStyles = {
  background: "#E5E8EB",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  minHeight: "100vh",
  padding: "60px 60px 80px",
  maxWidth: "100%",
};

export const MainContent = () => {
  return (
    <Container maxWidth="sm" component="main" style={myStyles} className="bd">
      <p>FORM</p>
      <CartsWrapper />
    </Container>
  );
};
