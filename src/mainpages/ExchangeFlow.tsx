import { useState } from "react";
import ExchangeStepper from "./ExchangeStepper";
import ExchangePage from "./ExchangePage";
import ConfirmPage from "./ConfirmPage";
import { Box, Typography } from "@mui/material";

export default function ExchangeFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [reverse, setReverse] = useState(false); 

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const handleStepClick = (step: number) => setActiveStep(step);

  return (
    <Box>
      <ExchangeStepper activeStep={activeStep} onStepClick={handleStepClick} />

      {activeStep === 0 && (
        <ExchangePage
          reverse={reverse}
          setReverse={setReverse} 
          onNext={handleNext}
        />
      )}

      {activeStep === 1 && (
        <ConfirmPage
          reverse={reverse} 
          onNext={handleNext}
        />
      )}

      {activeStep === 2 && (
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography sx={{ color: "#fff" }}>Step 2: Complete Page</Typography>
        </Box>
      )}
    </Box>
  );
}
