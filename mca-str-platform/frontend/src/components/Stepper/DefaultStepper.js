import React, { useState } from "react";
import { Button, Form } from "antd";
// import arrow from "../../assets/images/arrow.png";
import { Container } from "styles/pages/STR";
import arrow from "assets/svg/arrow.svg";
import arrowback from "assets/svg/arrow-back.svg";

const DefaultStepper = ({
  theme,

  steps,
  activeStep,
  handleNextStep,
  handlePrevStep,
  handleNavigateHome,

  children,
}) => {
  const [form] = Form.useForm();

  const [triggeredBy, setTriggeredBy] = useState("");

  const handleButtonClick = (buttonName) => {
    setTriggeredBy(buttonName);
  };

  const handleNext = async (formvalue) => {
    console.log("formvalue", formvalue);
    try {
      console.log(`active step: ${activeStep}`);
      if (triggeredBy === "next") {
        setTriggeredBy("");

        if (activeStep == 1) {
          handleNavigateHome();
        } else {
          handleNextStep();
        }
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Container theme={theme}>
      <div className="stepper-container">
        <div className="overlap-stepper-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index <= activeStep ? "active" : ""}`}
              style={{ zIndex: steps.length - index }}
            >
              <div className={`circle ${index <= activeStep ? "active" : ""}`}>
                {index + 1}
              </div>
              <div className="label">{step.label}</div>
            </div>
          ))}
        </div>

        <Form
          id="defaultStepper"
          form={form}
          onFinish={handleNext}
          className="allForm"
          layout="vertical"
        >
          {/* Render the form passed as children */}
          {children}

          <div
            className="container-box-stepper"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Back Button aligned to the left */}
            <div>
              {activeStep > 0 && (
                <Button onClick={handlePrevStep} className="stepperbutton">
                  <img src={arrowback} alt="Back" style={{ height: 20 }} />
                  Back
                </Button>
              )}
            </div>

            <div className="form-element-btn-next">
              {activeStep < steps.length - 1 && (
                <>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="stepperbutton"
                    onClick={() => handleButtonClick("next")}
                  >
                    Next
                    <img src={arrow} alt="Next" className="next-image" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default DefaultStepper;
