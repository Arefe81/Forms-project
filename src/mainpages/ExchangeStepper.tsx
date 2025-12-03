import React from "react";
import { Box, Stepper, Step, StepLabel, Container, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const steps = ["Exchange", "Confirm", "Complete"];

interface ExchangeStepperProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

interface CircleStepIconProps {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
}

const CircleStepIcon: React.FC<CircleStepIconProps> = ({ active, completed, icon }) => (
  <Box
    sx={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      backgroundColor: completed || active ? "#40A578" : "#596B89",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 18,
      color: "#fff",
      boxShadow: active ? "0 0 10px rgba(64,165,120,0.6)" : "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }}
  >
    {icon}
  </Box>
);

const CustomConnector = styled(StepConnector)(({ }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
  [`& .${stepConnectorClasses.line}`]: { borderColor: "#596B89", borderWidth: 2, width: "130px", margin: "0 auto" },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: { borderColor: "#40A578" },
}));

export default function ExchangeStepper({ activeStep, onStepClick }: ExchangeStepperProps) {
  return (
    <Container>
      <Box
        sx={{
          width: "1140px",
          height: "99px",
          background: "#2A3342",
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Stepper
          activeStep={activeStep}
          connector={<CustomConnector />}
          sx={{ width: "900px", "& .MuiStepLabel-label": { fontSize: 18, fontWeight: 500, ml: 2, color: "#ffffff" } }}
        >
          {steps.map((label, index) => {
            const completed = index < activeStep;
            const active = index === activeStep;
            const labelColor = active || completed ? "#40A578" : "#ffffff";

            return (
              <Step key={label} completed={completed}>
                <StepLabel
                  onClick={() => onStepClick(index)}     
                  style={{ cursor: "pointer" }}        
                  StepIconComponent={() => (
                    <CircleStepIcon active={active} completed={completed} icon={index + 1} />
                  )}
                  sx={{
                    "& .MuiStepLabel-label": {
                      color: labelColor,
                    },
                    "& .MuiStepLabel-label.Mui-active": {
                      color: "#40A578 !important",
                    },
                    "& .MuiStepLabel-label.Mui-completed": {
                      color: "#40A578 !important",
                    },
                  }}
                >
                  {label}
                </StepLabel>

              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Container>
  );
}
