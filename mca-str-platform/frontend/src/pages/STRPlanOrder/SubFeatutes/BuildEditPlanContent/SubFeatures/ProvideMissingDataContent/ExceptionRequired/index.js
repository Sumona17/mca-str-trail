import { Col, Row } from "antd";
import React from "react";
import TextContainer from "./TextContainer";
import LoanValidationTable from "./LoanValidationTable";

export default function ExceptionRequired() {
  return (
    <Row>
      <Col span={24}>
        <TextContainer />
      </Col>
      <Col span={24} style={{ marginTop: "1%" }}>
        <LoanValidationTable />
      </Col>
    </Row>
  );
}
