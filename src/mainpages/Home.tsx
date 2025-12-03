import { Container } from "@mui/material";
import { useState } from "react";
import ExchangeStepper from "./ExchangeStepper";
import ExchangePage from "./ExchangePage";
import ConfirmPage from "./ConfirmPage";

import TetherToPmStep1 from "./TetherToPm/TetherToPmStep1";
import SuccessPage from "./TetherToPm/SuccessPage";
import ExpiredPage from "./TetherToPm/ExpiredPage";

import PmToTetherStep1 from "./PmToTether/PmToTetherStep1";
import SuccessPagePm from "./PmToTether/SuccessPagePm";
import ExpiredPagePm from "./PmToTether/ExpiredPagePm";
import Waiting from "./TetherToPm/Waiting";

export default function Home() {
  const [reverse, setReverse] = useState(false);
  const [activeStep, setActiveStep] = useState(0); 

  const [timerExpired, setTimerExpired] = useState(false);

  const handleStepClick = (step: number) => setActiveStep(step);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleGoToWaiting = () => setActiveStep(4);
  const handleTimerExpired = () => setTimerExpired(true);

  const step3Component = reverse ? (
    <PmToTetherStep1
      onNext={handleGoToWaiting}
      onExpiredNext={handleGoToWaiting}
    />
  ) : (
    <TetherToPmStep1
      onNext={() => {
        if (timerExpired) {
          setActiveStep(99);
        } else {
          setActiveStep(3);
        }
      }}
      onExpiredNext={() => setActiveStep(99)}
      onTimerExpire={handleTimerExpired}
    />
  );

  const step4Component = reverse ? <SuccessPagePm /> : <SuccessPage />;

  const waitingComponent = (
    <Waiting
      onSuccess={() => setActiveStep(3)}
      onExpired={() => setActiveStep(99)}
    />
  );

  const steps = [
    <ExchangePage reverse={reverse} setReverse={setReverse} onNext={handleNext} />,
    <ConfirmPage reverse={reverse} onNext={handleNext} />,
    step3Component,
    step4Component,
    waitingComponent,
  ];

  let displayStep;

  if (activeStep >= 0 && activeStep < steps.length) {
    displayStep = steps[activeStep];
  } else if (activeStep === 99) {
    displayStep = reverse ? (
      <ExpiredPagePm onRetry={() => setActiveStep(2)} />
    ) : (
      <ExpiredPage onRetry={() => setActiveStep(2)} />
    );
  } else {
    displayStep = <ExchangePage reverse={reverse} setReverse={setReverse} onNext={handleNext} />;
  }

  return (
    <>
     
      <Container sx={{ mt: 4 }}>
        <ExchangeStepper activeStep={activeStep} onStepClick={handleStepClick} />
        {displayStep}
      </Container>
    </>
  );
}
