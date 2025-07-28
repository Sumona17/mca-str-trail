import React from "react";
import { Button, Row, Space, Col, Card } from "antd";
import { FormSection } from "styles/pages/ProductOffer";
import { Container } from "styles/pages/STR";
import useMetaData from "context/metaData";
import { TabContainer } from "styles/pages/STRPlanOrder";
import PublishOfferTable from "./PublishOfferTable";
import { PublishImage } from "styles/pages/Dashboard";
import ButtonIcon from "assets/svg/publish-arrow.svg";
import PublishLogo from "assets/images/publish.png";
import { useNavigate } from "react-router-dom";

const PublishOffer = () => {
  const { theme } = useMetaData();
  const navigate = useNavigate();

  return (
    <>
      <PublishImage theme={theme}>
        <Container>
          <Row align="middle" style={{ position: "relative" }}>
            <Col
              span={16}
              style={{
                paddingLeft: "60px",
              }}
            >
              <p className="subtitle">This offer was approved by</p>
              <h3 className="title">
                E. Sanderson on June 6, 2025 and may now be published.
              </h3>
              <p className="approvertitle">
                Approver Comments: Approved. No business exceptions required.
              </p>
            </Col>
            <Col
              span={8}
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <img
                src={PublishLogo}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "-50px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </Container>
      </PublishImage>

      <TabContainer>
        <Container>
          <FormSection theme={theme}>
            <br />
            <div className="container-box">
              <div className="step-content-box">
                <Row gutter={24}></Row>
              </div>
            </div>
            <div className="Quotelabel-row" style={{ marginLeft: "35px" }}>
              <span className="offerlabel">Offer Summary:</span>
              <br />
              <br />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div style={{ display: "flex" }}>
                  <div className="offer-sublabel">Offer Name:</div>
                  <div>
                    Mid-market 401k - Offer B - Manufacturing/Industrial{" "}
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="offer-sublabel">Offer Description:</div>
                  <div className="offer-subdescription">
                    This offer is designed for middle-market plans for
                    manufacturing/industrial companies. It requires the use of
                    auto-enrollment features and auto-escalation unlike its
                    counterpart offer (Mid-market 401K - Offer A).
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="offer-sublabel">Range of Employees:</div>
                  <div className="offer-subdescription">
                    1,000 to 5,000 employees
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="offer-sublabel">Range of Assets:</div>
                  <div className="offer-subdescription">
                    $10,000,000 to $100,000,000
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div
              className="Quotelabel-row"
              style={{
                marginLeft: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Card className="graph-card" style={{ background: "white" }}>
                <div style={{ marginBottom: "12px" }}>
                  <span className="enrollmentlabel">Enrollment</span>
                </div>
                <PublishOfferTable />
              </Card>

              <Row justify="end" style={{ marginTop: 10 }}>
                <Space>
                  <Button
                    type="default"
                    style={{
                      borderColor: "#276070",
                      color: "#276070",
                    }}
                  >
                    Print
                  </Button>
                  <Button
                    type="default"
                    style={{
                      borderColor: "#276070",
                      color: "#276070",
                    }}
                  >
                    Export
                  </Button>
                  <Button
                    type="default"
                    style={{
                      borderColor: "#276070",
                      color: "#276070",
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#276070",
                      borderColor: "#276070",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onClick={() => navigate("/str-plan-order")}
                  >
                    Publish
                    <img
                      src={ButtonIcon}
                      alt="Publish Icon"
                      style={{ height: 16 }}
                    />
                  </Button>
                </Space>
              </Row>
            </div>
          </FormSection>
        </Container>
      </TabContainer>
    </>
  );
};

export default PublishOffer;
