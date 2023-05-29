import React, { useState } from "react";
import { Logo } from "./../common/Logo";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CssBaseline, Divider } from "@mui/material";
import { Gender } from "./Gender";
import { Age } from "./Age";
import { Location } from "./Location";
import { Username } from "./Username";
import { Password } from "./Password";
import { Email } from "./Email";

const steps = [
  <WcOutlinedIcon />,
  <CakeOutlinedIcon />,
  <FmdGoodOutlinedIcon />,
  <PersonOutlineOutlinedIcon />,
  <LockOutlinedIcon />,
  <EmailOutlinedIcon />,
];

const defaultTheme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Gender handleFormChange={handleFormChange} />;
      case 1:
        return <Age handleFormChange={handleFormChange} />;
      case 2:
        return <Location handleFormChange={handleFormChange} />;
      case 3:
        return <Username handleFormChange={handleFormChange} />;
      case 4:
        return <Password handleFormChange={handleFormChange} />;
      case 5:
        return <Email handleFormChange={handleFormChange} />;
      default:
        throw new Error("Unknown step");
    }
  }
  const handleLogData = () => {
    console.log("Form data:", formData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box component="main" sx={{ m: "0 auto 4px", width: "712px" }}>
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, md: "32px 99px" },
            borderRadius: "12px",
          }}
        >
          <Logo
            sx={{
              width: "250px",
              margin: "0 auto 66px",
            }}
          />

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, idx) => (
              <StepLabel key={idx} sx={{ border: "1px solid red" }}>
                {label}
              </StepLabel>
            ))}
            <br />
            <Divider sx={{ mb: 3, mt: 5, width: "100%" }} />
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you.
              </Typography>
              <Typography>Success message</Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? (
                  <Button onClick={handleLogData}>Complete</Button>
                ) : (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
