import React from "react";
import { Col, Row, Form } from "antd";
import { FormSection } from "styles/pages/ProductOffer";
import { Container } from "styles/pages/STR";
import DropdownSelect from "components/FormControl/DropdownSelect";
import MultipleDropdownSelect from "components/FormControl/MultipleDropdownSelect";
import FormControl from "components/FormControl/FormInput";
import useMetaData from "context/metaData";
import TextArea from "antd/es/input/TextArea";
import { defaultBackgroundInfo,fleetLimitDropdownValues } from "../data/DummyData";

const BackgroundInfo = ({ dropdownValues }) => {
  const { theme } = useMetaData();
  // const handlePlanDocChange = (values) => {
  //   console.log('Selected plan documents:', values);
  // };


  return (
    <Container>
      <FormSection theme={theme}>
        <div className="Quotelabel-row">
          <span className="headerlabel">
            Please enter information about this offer. The selections made on
            this screen will impact the choices/options available on future
            screens.
          </span>
        </div>
        <br />
        <div className="container-box">
          <div className="step-content-box">
            <Row gutter={24}>
              <Col span={24}>
                <Row gutter={16} align="middle">
                  <Col span={6} style={{marginTop:'-20px'}}>
                    <label className="label-text">Offer Name:</label>
                  </Col>
                  <Col span={18}>
                    <FormControl
                      name="offerName"
                      type="text"
                      layout="vertical"
                      defaultValue={defaultBackgroundInfo.offerName}
                    />
                  </Col>
                </Row>
              </Col>

              <Col span={24} style={{ marginBottom: "20px" }}>
                <Row gutter={16} align="middle">
                  <Col span={6}>
                    <label className="label-text">Description:</label>
                  </Col>
                  <Col span={18}>
                    <Form.Item name="offerDescription" style={{ margin: 0 }}>
                      <TextArea
                        rows={3}
                        defaultValue={defaultBackgroundInfo.offerDescription}
                        placeholder="Describe the purpose of this offer..."
                        style={{
                          backgroundColor:
                            defaultBackgroundInfo.offerDescription
                              ? "#E2EFF8"
                              : "white",
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <hr />
                <br />
              </Col>

              <Col span={24}>
                <Row gutter={16} align="middle">
                  <Col span={6}>
                    <label className="label-text">Range of Employees:</label>
                  </Col>
                  <Col span={18}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <FormControl
                          label="Minimum"
                          name="employeeMinimum"
                          type="number"
                          layout="vertical"
                          defaultValue={defaultBackgroundInfo.employeeMinimum}
                        />
                      </Col>
                      <Col span={12}>
                        <FormControl
                          label="Maximum"
                          name="employeeMaximum"
                          type="number"
                          layout="vertical"
                          defaultValue={defaultBackgroundInfo.employeeMaximum}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Row gutter={16} align="middle">
                  <Col span={6} style={{marginTop:'-20px'}}>
                    <label className="label-text">Range of Assets:</label>
                  </Col>
                  <Col span={18}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <FormControl
                          name="rangeMinimum"
                          type="text"
                          layout="vertical"
                          defaultValue={defaultBackgroundInfo.rangeMinimum}
                        />
                      </Col>
                      <Col span={12}>
                        <FormControl
                          name="rangeMaximum"
                          type="text"
                          layout="vertical"
                          defaultValue={defaultBackgroundInfo.rangeMaximum}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              {[
                ["planType", "Plan Type"],
                ["planSubType", "Plan Sub-Type"],
                ["industry", "Industry"],
                ["advisorType", "Advisor Type"],
              ].map(([key, label]) => (
                <Col span={24} key={key}>
                  <Row gutter={16} align="middle">
                    <Col span={6} style={{marginTop:'-20px'}}>
                      <label className="label-text">{label}:</label>
                    </Col>
                    <Col span={18}>
                      <DropdownSelect
                        layout="vertical"
                        name={key}
                        options={dropdownValues?.FleetLimit || []}
                        defaultValue={defaultBackgroundInfo[key]}
                      />
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <hr />
        <br />
        <div className="Quotelabel-row">
          <span className="contentlabel">Plan Document:</span>
        </div>
        <br />

        <div className="container-box">
          <Row gutter={16} align="middle">
            <Col span={6}>
              <label className="label-text">
                On which plan document(s) is this offer based?
              </label>
            </Col>
            <Col span={18}>
              <MultipleDropdownSelect
              layout="vertical"
                name="planDocument"
                 options={fleetLimitDropdownValues}
                 defaultValue={defaultBackgroundInfo.planDocument}
              />
            </Col>
          </Row>
        </div>
      </FormSection>
    </Container>
  );
};

export default BackgroundInfo;
