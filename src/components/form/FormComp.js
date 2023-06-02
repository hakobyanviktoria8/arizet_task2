import React, { useState, useEffect } from "react";
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
import axios from "axios";

const steps = 6;

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
  const [formData, setFormData] = useState({});
  const [disable, setDisable] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    console.log(100000000000, formData, activeStep);
    switch (activeStep) {
      case 0: {
        setDisable(!formData.gender || !formData.looking_for);
        return;
      }
      case 1: {
        setDisable(!formData.DOB);
        return;
      }
      case 2: {
        setDisable(!formData.location);
        return;
      }
      case 3: {
        setDisable(!formData.username);
        return;
      }
      case 4: {
        setDisable(!formData.password);
        return;
      }
      case 5: {
        setDisable(!formData.email);
        return;
      }
      default:
        setDisable(true);
        return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, handleFormChange]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const request = await axios.post(
  //         `${apiUrl}/`,
  //         {
  //           username: "razd24",
  //         },
  //         {
  //           params: {
  //             site_key: "no01",
  //           },
  //         }
  //       );
  //       console.log("111111111111aa", request);
  //     } catch (error) {
  //       console.log("11111111222aa", error);
  //     }
  //   };

  //   // console.log(123123, formData);
  //   if (formData.email !== "" && formData.password !== "") {
  //     // fetchData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleLogData = () => {
    //18.196.7.44/api/v2/registration/61125373642b0b61c30bc492?site_key=no01

    console.log("Form data:", formData);
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
              {activeStep === steps - 1 ? (
                <ButtonComp
                  onClick={handleLogData}
                  text="Complete"
                  // disabled={true}
                  sx={{
                    mt: 3,
                    mb: 2,
                    background: "#F76448",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "rgba(247, 100, 72, 0.9)",
                    },
                  }}
                />
              ) : (
                <ButtonComp
                  onClick={handleNext}
                  text="Next"
                  disabled={disable}
                  sx={{
                    mt: 3,
                    mb: 2,
                    background: "#F76448",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "rgba(247, 100, 72, 0.9)",
                    },
                  }}
                />
              )}

              {activeStep !== 0 && (
                <ButtonComp
                  sx={{
                    mb: 3,
                    textAlign: "center",
                    width: "100%",
                  }}
                  variant="body1"
                  onClick={handleBack}
                  text="Back"
                />
              )}
            </Box>

            {activeStep === 0 && <HaveAccount />}
          </>
        )}
      </FormCompPaper>
    </FormCompBox>
  );
};
