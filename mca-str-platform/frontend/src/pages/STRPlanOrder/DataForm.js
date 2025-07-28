import React, { useEffect } from "react";
import { Container } from "styles/components/Layout";

import useMetaData from "context/metaData";
import { FormSection } from "styles/pages/ProductOffer";
import { Button, Col, Row } from "antd";
import FormControl from "components/FormControl/FormInput";
import {
  noOfDataElementsPulled,
  totalDataElements,
} from "./SubFeatutes/BuildEditPlanContent/SubFeatures/ProvideMissingDataContent/data";

export default function DataForm({ handleSaveRemainingData }) {
  const [noOfDataElementsYetToBePulled, setNoOfDataElementsYetToBePulled] =
    React.useState(0);

  const { theme } = useMetaData();
  useEffect(() => {
    setNoOfDataElementsYetToBePulled(
      totalDataElements - noOfDataElementsPulled
    );
  }, []);
  return (
    <Container>
      <FormSection theme={theme}>
        <div className="Quotelabel-row">
          <span className="headerlabel">
            After ingesting the documents, the following fields represent data
            that could not be identified or extracted. For us to suggest an
            appropriate offer, we need the following data. Please Enter the
            following data.
          </span>
        </div>
        <br />
        <div className="container-box">
          <div className="step-content-box">
            <Row gutter={24}>
              {noOfDataElementsYetToBePulled > 0 &&
                Array.from({ length: noOfDataElementsYetToBePulled }).map(
                  (_, index) => (
                    <Col span={24} key={index}>
                      <Row gutter={16} align="middle">
                        <Col span={6} style={{ marginTop: "-20px" }}>
                          <label className="label-text">Data Element:</label>
                        </Col>
                        <Col span={18}>
                          <FormControl
                            required={true}
                            name={`dataElement_${index}`}
                            type="text"
                            layout="vertical"
                          />
                        </Col>
                      </Row>
                    </Col>
                  )
                )}
              <Col span={24}>
                <Button
                  onClick={handleSaveRemainingData}
                  type="primary"
                  className="stepperbutton"
                  style={{
                    backgroundColor: "#276070",
                  }}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </FormSection>
    </Container>
  );
}
