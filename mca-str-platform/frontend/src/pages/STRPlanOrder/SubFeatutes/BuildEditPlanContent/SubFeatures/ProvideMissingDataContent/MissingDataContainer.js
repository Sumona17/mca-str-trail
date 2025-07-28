import { Col, Row } from "antd";
import DefaultPopupModal from "components/PopupModal";
import DataForm from "pages/STRPlanOrder/DataForm";
import React from "react";
import {
  AnalyzingContainer,
  MarginLessH4,
  MarginLessP,
  MissingDataContainerDiv,
} from "styles/pages/STRPlanOrder";
import ExtraDataEntry from "./ExtraDataEntry";

export default function MissingDataContainer({
  handlePostSaveRemainingData,
  setShowExceptionRequired,
  showExceptionRequired,
}) {
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [showAnalysingText, setShowAnalysingText] = React.useState(false);

  const handleSaveRemainingData = () => {
    setShowExceptionRequired(false);
    setShowFormModal(false);
    setShowAnalysingText(true);
    setTimeout(() => {
      setShowAnalysingText(false);
      handlePostSaveRemainingData();
    }, 2000);
  };
  return (
    <Row>
      <Col span={24}>
        <MissingDataContainerDiv>
          <MarginLessH4>Missing Data</MarginLessH4>
          <MarginLessP>
            After ingesting the documents, the following fields represent data
            that could not be identified or extracted. For us to suggest an
            appropriate offer, we need the following data. Click{" "}
            <a
              // onClick={() => setShowFormModal(true)}
              style={{ textDecoration: "underline" }}
            >
              here
            </a>{" "}
            to view the data we have so far. Enter the data manually or upload
            additional documents using the button at the bottom of the page
          </MarginLessP>
          {showFormModal && (
            <DefaultPopupModal
              open={showFormModal}
              icon={null}
              onCancel={() => setShowFormModal(false)}
              content={
                <DataForm handleSaveRemainingData={handleSaveRemainingData} />
              }
            />
          )}
        </MissingDataContainerDiv>
      </Col>
      <Col span={24}>
        <ExtraDataEntry />
      </Col>
      {showAnalysingText && !showExceptionRequired && (
        <Col span={24} style={{}}>
          <AnalyzingContainer>
            <p style={{ fontSize: "15px", fontWeight: "200", color: "#555" }}>
              Analyzing<span className="dot-animation">...</span>
            </p>
          </AnalyzingContainer>
        </Col>
      )}
    </Row>
  );
}
