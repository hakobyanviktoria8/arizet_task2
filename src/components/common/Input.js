import React from "react";
import { TextField, styled } from "@mui/material";

const InputBox = styled(TextField)(() => ({
  border: "1px solid #F76448",
  width: "100%",
  borderRadius: "16px",
  fontSize: "18px",
  height: "48px",
  padding: "0 12px",
}));

export const Input = ({ value, handleChange, placeholder, type }) => {
  return (
    <InputBox
      className="inputBox"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
