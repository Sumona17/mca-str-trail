import React, { useState } from "react";
import { Layout } from "antd";
import { step_list } from "pages/STRProductOffer/data/steps";
import ProductOfferStepper from "components/Stepper/ProductOfferStepper";
import useMetaData from "context/metaData";
import { StepperContainer } from "styles/pages/STRPlanOrder";

// Flatten steps with parent-child info
const flattenedSteps = [];
step_list.forEach((step, index) => {
  if (step.children && step.children.length > 0) {
    flattenedSteps.push({ ...step, isParent: true, isChild: false });

    step.children.forEach((child, childIndex) => {
      flattenedSteps.push({
        ...child,
        isParent: false,
        isChild: true,
        parentLabel: step.label,
        parentIndex: index,
        childIndex,
      });
    });
  } else {
    flattenedSteps.push({ ...step, isParent: false, isChild: false });
  }
});

const EditOfferLayout = ({setActiveTab}) => {
  const { theme } = useMetaData();
  const [activeStep, setActiveStep] = useState(() => {
    // Set first enabled step as initial
    const firstEnabledIndex = flattenedSteps.findIndex(step => !step.disabled);
    return firstEnabledIndex !== -1 ? firstEnabledIndex : 0;
  });
  const [sidebarCurrentStep, setSidebarCurrentStep] = useState(() => {
    const firstEnabledIndex = flattenedSteps.findIndex(step => !step.disabled);
    return firstEnabledIndex !== -1 ? firstEnabledIndex : 0;
  });

  // Skip disabled steps on prev
  const handlePrevStep = () => {
    let prev = activeStep - 1;
    while (prev >= 0 && flattenedSteps[prev]?.disabled) {
      prev--;
    }
    if (prev >= 0) {
      setActiveStep(prev);
      setSidebarCurrentStep(prev);
    }
  };

  // Skip disabled steps on next
  const handleNextStep = () => {
    let next = activeStep + 1;
    while (next < flattenedSteps.length && flattenedSteps[next]?.disabled) {
      next++;
    }
    if (next < flattenedSteps.length) {
      setActiveStep(next);
      setSidebarCurrentStep(next);
    }
  };

  // Block manual click on disabled steps
  const handleStepChange = (index) => {
    if (!flattenedSteps[index]?.disabled) {
      setActiveStep(index);
      setSidebarCurrentStep(index);
    }
  };

  return (
    <Layout style={{ background: "#fff", padding: "24px", minHeight: "100vh" }}>
      <StepperContainer theme={theme}>
        <ProductOfferStepper
          theme={theme}
          steps={flattenedSteps}
          activeStep={activeStep}
          setActiveStep={handleStepChange}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          sidebarCurrentStep={sidebarCurrentStep}
          setSidebarCurrentStep={handleStepChange}
          setActiveTab={setActiveTab}
        />
      </StepperContainer>
    </Layout>
  );
};

export default EditOfferLayout;
