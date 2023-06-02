import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Button, styled } from "@mui/material";
import { Logo } from "../common/Logo";
import { HaveAccount } from "./HaveAccount";
import { ButtonComp } from "../common/ButtonComp";
import { StepperComp } from "./StepperComp";
import { Age } from "./Age";
import { Gender } from "./Gender";
import { Email } from "./Email";
import { Location } from "./Location";
import { Password } from "./Password";
import { Username } from "./Username";

const steps = 6;

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Gender />;
    case 1:
      return <Age />;
    case 2:
      return <Location />;
    case 3:
      return <Username />;
    case 4:
      return <Password />;
    case 5:
      return <Email />;
    default:
      throw new Error("Unknown step");
  }
}

const FormCompBox = styled(Box)(({ theme }) => ({}));

const FormCompPaper = styled(Paper)(({ theme }) => ({
  width: "340px",
  borderRadius: "12px",
  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
  padding: "24px 16px",
  background: "#fff",
  margin: "0 auto",

  [theme.breakpoints.up("sm")]: {
    width: "500px",
    padding: "28px 40px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "712px",
    padding: "32px 99px",
  },
}));

export const FormComp = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <FormCompBox>
      <FormCompPaper>
        <Logo />

        <StepperComp active={activeStep} />

        {activeStep === steps ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">Your order number</Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}

            <Box>
              <ButtonComp
                text={activeStep === steps - 1 ? "Complete" : "Next"}
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "#F76448",
                  color: "#FFFFFF",
                }}
                onClick={handleNext}
              />

              {activeStep !== 0 && (
                <Button
                  onClick={handleBack}
                  sx={{ mb: 3, textAlign: "center", width: "100%" }}
                  variant="body1"
                >
                  Back
                </Button>
              )}
            </Box>

            {activeStep === 0 && <HaveAccount />}
          </>
        )}
      </FormCompPaper>
    </FormCompBox>
  );
};
