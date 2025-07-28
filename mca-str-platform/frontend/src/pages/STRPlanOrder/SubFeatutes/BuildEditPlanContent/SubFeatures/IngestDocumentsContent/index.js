import { Col, Row } from "antd";
import React from "react";
import DocumentListContainer from "./DocumentListContainer";
import FileUploadContainer from "./FileUploadContainer";

export default function IngestDocumentsContent() {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <DocumentListContainer />
      </Col>
      <Col span={12}>
        <FileUploadContainer />
      </Col>
    </Row>
  );
}
