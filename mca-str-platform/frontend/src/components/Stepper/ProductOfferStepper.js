import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "antd";
import moment from "moment";
import arrow from "../../assets/svg/arrow.svg";
import arrowback from "assets/svg/arrow-back.svg";
import {
  SidebarContainer,
  StepItem,
  StepHeader,
  StepDescription,
  StepTitle,
} from "styles/pages/ProductOffer";
import { Container } from "styles/pages/STR";
import SettingIcon from "assets/svg/setting.svg";

const ProductOfferStepper = ({
  theme,
  steps,
  activeStep,
  setActiveStep,
  handlePrevStep,
  handleNextStep,
  sidebarCurrentStep,
  setSidebarCurrentStep,
  setActiveTab,
}) => {
  const [form] = Form.useForm();
  const [triggeredBy, setTriggeredBy] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const sidebarRefs = useRef([]);

  useEffect(() => {
    const defaultValues = {
      firstName: "John",
      lastName: "Doe",
      address: "123 Elm Street",
      zipCode: "10001",
      effectiveDate: moment("2024-09-29T18:30:00.000Z", "YYYY-MM-DD"),
    };

    setInitialValues(defaultValues);
    form.setFieldsValue(defaultValues);
  }, [form]);

  useEffect(() => {
    sidebarRefs.current = steps.map(
      (_, i) => sidebarRefs.current[i] ?? React.createRef()
    );
  }, [steps]);

  useEffect(() => {
    const activeRef = sidebarRefs.current[sidebarCurrentStep];
    if (activeRef?.scrollIntoView) {
      activeRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [sidebarCurrentStep]);

  const handleButtonClick = (btn) => {
    setTriggeredBy(btn);
  };

  const onFinish = () => {
    const currentStep = steps[activeStep];

    if (triggeredBy === "save") {
      setTriggeredBy("");
    } else if (triggeredBy === "next") {
      setTriggeredBy("");

      const isLoansStep =
        currentStep &&
        ((currentStep.label === "Loans [75%]" &&
          currentStep.parentLabel === "Recordkeeping 90%") ||
          (currentStep.label?.includes("Loans") &&
            currentStep.parentLabel?.includes("Recordkeeping")) ||
          (currentStep.label?.toLowerCase().includes("loans") &&
            currentStep.parentLabel?.toLowerCase().includes("recordkeeping")));

      if (isLoansStep && typeof setActiveTab === "function") {
        setActiveTab("2");
      } else if (activeStep === 0) {
        setActiveStep(7);
        setSidebarCurrentStep(7);
      } else {
        handleNextStep();
      }
    }
  };

  const handleSidebarStepClick = (index) => {
    const clickedStep = steps[index];

    if (
      clickedStep.label === "Loans [75%]" &&
      clickedStep.parentLabel === "Recordkeeping 90%"
    ) {
      setActiveTab?.("3");
    }

    setSidebarCurrentStep(index);
    setActiveStep(index);
  };

  return (
    <Container theme={theme} style={{ display: "flex" }}>
      <div className="productstepper-container">
        <div
          style={{
            width: 230,
            background: "#0871C0",
            padding: "24px 5px",
            borderRadius: "12px",
          }}
        >
          <SidebarContainer>
            {steps.map((step, index) => (
              <StepItem
                key={index}
                ref={(el) => (sidebarRefs.current[index] = el)}
                isChild={step.isChild}
                isActive={index === sidebarCurrentStep}
                onClick={() => {
                  if (!step.disabled) {
                    handleSidebarStepClick(index);
                  }
                }}
                style={{
                  backgroundColor: step.disabled
                    ? ""
                    : index === sidebarCurrentStep
                    ? "#1890FF"
                    : "transparent",
                  cursor: step.disabled ? "not-allowed" : "pointer",
                  opacity: step.disabled ? 0.6 : 1,
                  color: step.disabled ? "#666" : "#fff",
                  padding: "8px 12px",
                  borderRadius: 6,
                  marginBottom: 4,
                }}
              >
                <StepHeader>
                  {!step.isChild && (
                    <img
                      src={SettingIcon}
                      alt="Setting Icon"
                      style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                  )}
                  <StepTitle
                    isChild={step.isChild}
                    style={step.isChild ? { paddingLeft: 28 } : {}}
                  >
                    {step.label}
                  </StepTitle>
                </StepHeader>

                {step.description && (
                  <StepDescription>{step.description}</StepDescription>
                )}
              </StepItem>
            ))}
          </SidebarContainer>
        </div>

        <div style={{ flex: 1, padding: "0 32px" }}>
          <Form
            id="product-offer-form"
            form={form}
            initialValues={initialValues}
            onFinish={onFinish}
            layout="vertical"
            className="allForm"
          >
            {steps[activeStep].content}

            <div
              className="container-box-stepper"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: 12 }}>
                {(() => {
                  const currentStep = steps[activeStep];
                  const isLoansUnderRecordkeeping =
                    currentStep.label === "Loans [75%]" &&
                    currentStep.parentLabel === "Recordkeeping 90%";

                  return (
                    <>
                      {isLoansUnderRecordkeeping && (
                        <Button
                          onClick={() => {}}
                          className="stepperbutton"
                        >
                          Add Exception
                        </Button>
                      )}

                      {activeStep > 0 && (
                        <Button
                          onClick={handlePrevStep}
                          className="stepperbutton"
                        >
                          <img src={arrowback} alt="Back" style={{ height: 20 }} />
                          Back
                        </Button>
                      )}
                    </>
                  );
                })()}
              </div>

              <div style={{ display: "flex", gap: "12px", marginLeft: "auto" }}>
                <Button
                  type="default"
                  htmlType="submit"
                  className="stepperbutton"
                  onClick={() => handleButtonClick("save")}
                >
                  Save
                </Button>

                {activeStep < steps.length && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="stepperbutton"
                    onClick={() => handleButtonClick("next")}
                  >
                    Next
                    <img src={arrow} alt="Next" className="next-image" />
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ProductOfferStepper;
