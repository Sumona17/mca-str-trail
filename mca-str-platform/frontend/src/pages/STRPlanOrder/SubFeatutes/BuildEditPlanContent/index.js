import React, { useState } from "react";
import useMetaData from "context/metaData";
import DefaultStepper from "components/Stepper/DefaultStepper";

import { StepperContainer } from "styles/pages/STRPlanOrder";
import { step_list } from "pages/STRPlanOrder/data/steps";
import { useNavigate } from "react-router-dom";

export default function BuildEditPlanContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const { theme } = useMetaData();
  const navigate = useNavigate();

  const handlePrevStep = async () => {
    setCurrentStep((prevStep) => prevStep - 1, 0);
  };

  const handleNextStep = async () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleNavigateHome = async () => {
    navigate("/");
  };

  return (
    <StepperContainer theme={theme}>
      <DefaultStepper
        theme={theme}
        steps={step_list}
        activeStep={currentStep}
        setActiveStep={setCurrentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        handleNavigateHome={handleNavigateHome}
      >
        {step_list[currentStep].content}
      </DefaultStepper>
    </StepperContainer>
  );
}
