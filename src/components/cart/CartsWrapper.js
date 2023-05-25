import React from "react";
import { CartComp } from "./CartComp";
import { Box } from "@mui/material";
import { cartsData } from "../../dataUiPart.js/cartsData";

export const CartsWrapper = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {cartsData?.map((cart) => (
        <CartComp key={cart.id} Icon={cart.icon} text={cart.text} />
      ))}
    </Box>
  );
};
