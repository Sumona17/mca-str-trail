import { Col, Row } from "antd";
import React, { useState } from "react";
import MissingDataContainer from "./MissingDataContainer";
import ExceptionRequired from "./ExceptionRequired";
// import PostAnalysisContainer from "./PostAnalysisContainer";

export default function index() {
  const [showExceptionRequired, setShowExceptionRequired] = useState(true);

  const handlePostSaveRemainingData = () => {
    setShowExceptionRequired(true);
  };
  return (
    <Row>
      <Col span={24}>
        <MissingDataContainer
          handlePostSaveRemainingData={handlePostSaveRemainingData}
          setShowExceptionRequired={setShowExceptionRequired}
          showExceptionRequired={showExceptionRequired}
        />
      </Col>

      {showExceptionRequired && (
        <>
          <Col span={24}>{/* <PostAnalysisContainer /> */}</Col>
          <Col span={24}>
            <ExceptionRequired />
          </Col>
        </>
      )}
    </Row>
  );
}
