import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, styled } from "@mui/material";
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
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const storedUid = localStorage.getItem("uid");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/start`,
        { username: formData.username },
        {
          params: {
            site_key: "no01",
          },
        }
      );
      if (response?.data.Status === "ok") {
        setStatus(response?.data.Status);
        setErrorMessage("");
        localStorage.setItem("uid", response?.data.Data);
        setActiveStep(activeStep + 1);
      }
    } catch (error) {
      if (error?.response?.data.Status === "fail") {
        setStatus(error?.response?.data.Status);
        setErrorMessage(error?.response?.data?.Error?.message);
        localStorage.removeItem("uid");
      }
    }
  };

  const fetchCompleteData = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/${storedUid}`,
        {
          email: formData.email,
          DOB: formData.DOB,
          location: formData.location,
          gender: formData.gender,
          password: formData.password,
          looking_for: formData.looking_for,
        },
        {
          params: {
            site_key: "no01",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    if (activeStep === 3) {
      fetchData();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setErrorMessage("");
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
        setDisable(!formData.email || !formData.checkboxes);
        return;
      }
      default:
        setDisable(true);
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, handleFormChange]);

  const handleCompleteData = () => {
    console.log("Form data:__________", formData, errorMessage, status);
    if (!errorMessage && status === "ok") {
      fetchCompleteData();
    }
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

            {errorMessage && (
              <Typography
                sx={{ fontSize: "14px", marginTop: "16px", color: "red" }}
              >
                {errorMessage}
              </Typography>
            )}

            <Box>
              {activeStep === steps - 1 ? (
                <ButtonComp
                  onClick={handleCompleteData}
                  text="Complete"
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
