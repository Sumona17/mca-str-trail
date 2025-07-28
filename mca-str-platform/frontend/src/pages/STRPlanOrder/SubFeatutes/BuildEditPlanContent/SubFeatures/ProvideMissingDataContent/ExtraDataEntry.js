import { Col, Input, Row } from "antd";

import React from "react";
import { GreyButton, MissingDataContainerDiv } from "styles/pages/STRPlanOrder";
import { buildPlanStep2Data } from "./data";

export default function ExtraDataEntry() {
  return (
    <MissingDataContainerDiv style={{ backgroundColor: "white" }}>
      <Row>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p style={{ margin: 0 }}>Total number of participants:</p>

            <Input
              type="number"
              value={buildPlanStep2Data?.totalParticipants}
              className="pill"
            />
          </div>
        </Col>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
            <p style={{ margin: 0 }}>Total plan assets:</p>
            <Input
              value={buildPlanStep2Data?.totalPlanAssets}
              className="pill"
            />
          </div>
        </Col>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center", gap: "180px" }}>
            <p style={{ margin: 0 }}></p>

            <GreyButton>Upload Additional Documents</GreyButton>
          </div>
        </Col>
      </Row>
    </MissingDataContainerDiv>
  );
}
