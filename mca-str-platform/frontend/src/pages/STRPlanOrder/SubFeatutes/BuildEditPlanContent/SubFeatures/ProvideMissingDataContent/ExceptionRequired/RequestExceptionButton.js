import DefaultPopupModal from "components/PopupModal";
import React, { useState } from "react";
import {
  ApplicationButton,
  CenteredDiv,
  FormSection,
  MarginLessH4,
  MarginLessP,
} from "styles/pages/STRPlanOrder";
import ExceptionRequestIcon from "assets/images/exception-request-icon.png";
import { Button, Col, Row } from "antd";
import FormControl from "components/FormControl/FormInput";

import useMetaData from "context/metaData";
import arrow from "assets/svg/arrow.svg";
import { buildPlanStep2Data } from "../data";

export default function RequestExceptionButton({ loanValues }) {
  const { theme } = useMetaData();
  const [openExceptionRequestModal, setOpenExceptionRequestModal] =
    useState(false);
  const handleOpenExceptionRequestModal = () => {
    setOpenExceptionRequestModal(true);
  };
  const content = (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "5px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        backgroundColor: "#fff",
        borderRadius: "12px",
      }}
    >
      <MarginLessH4
        style={{ fontSize: "1.2rem", display: "flex", alignItems: "center" }}
      >
        <img
          src={ExceptionRequestIcon}
          alt="Exception"
          style={{ marginRight: "8px", height: "20px", width: "25px" }}
        />
        Exception Request
      </MarginLessH4>

      <MarginLessP style={{ fontSize: "14px", lineHeight: "1.6" }}>
        The selected offer recommends a maximum of 3 total loans, and you have
        requested 5. If you would like to request an exception, please add
        comments and save this exception request, otherwise cancel and update
        the number of loans for this plan.
      </MarginLessP>

      <FormSection theme={theme}>
        <Row style={{ alignItems: "baseline" }} gutter={[8, 8]}>
          <Col span={6}>
            <label
              className="label-text"
              style={{
                fontSize: "15px",
              }}
            >
              Pertains To:
            </label>
          </Col>
          <Col span={18}>
            <FormControl
              name="pertainsTo"
              type="text"
              layout="vertical"
              defaultValue={
                buildPlanStep2Data?.pertainsTo || "Loan Administration"
              }
              style={{
                backgroundColor: "#eaf3fb",
                borderRadius: "8px",
                padding: "8px",
                border: "1px solid #cbd6e2",
                width: "100%",
              }}
            />
          </Col>
        </Row>

        <Row gutter={[16, 8]}>
          <Col span={24}>
            <label
              className="label-text"
              style={{ fontWeight: "bold", marginLeft: -40 }}
            >
              Notes/Comments:
            </label>
          </Col>
          <Col span={24}>
            <FormControl
              name="notesComments"
              type="textarea"
              rows={6}
              defaultValue={`General-purpose loans requested: ${loanValues?.["general"]}
Primary residence loans requested: ${loanValues?.["residence"]}
Total loans requested: ${loanValues?.["total"]}

user may add additional (or edit existing) comments here>`}
              placeholder="Describe the purpose of this offer..."
              style={{
                backgroundColor: "#f3f5f6",
                borderRadius: "12px",
                padding: "12px",
                border: "1px solid #ddd",
                fontSize: "14px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
              }}
            />
          </Col>
        </Row>
      </FormSection>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
          gap: "12px",
        }}
      >
        <Button
          onClick={() => setOpenExceptionRequestModal(false)}
          type="primary"
          className="stepperbutton"
          style={{
            backgroundColor: "#276070",
          }}
        >
          Save
          <img src={arrow} alt="Next" className="next-image" />
        </Button>
      </div>
    </div>
  );

  return (
    <CenteredDiv>
      <ApplicationButton
        onClick={handleOpenExceptionRequestModal}
        style={{ padding: "0.5%" }}
      >
        Request Exception
      </ApplicationButton>
      {openExceptionRequestModal && (
        <DefaultPopupModal
          open={openExceptionRequestModal}
          onCancel={() => setOpenExceptionRequestModal(false)}
          content={content}
        />
      )}
    </CenteredDiv>
  );
}
