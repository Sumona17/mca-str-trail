import { Row, Col, Card, Typography, Alert, Button } from "antd";
import React, { useState } from "react";
import { Container } from "styles/components/Layout";
import TargetDashboard from "assets/images/Goals.png";
import TargetDashboardDark from "assets/images/Goals.png";
import {
  DashboardCard,
  DashboardSection,
  BannerImage,
} from "styles/pages/Dashboard";
import useMetaData from "context/metaData";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import ProductException from "./ProductException";
import Portfolio from "./Portfolio";
import Advisory from "./Advisory";
import Documentinventory from "./Documentinventory";
import ProductUtilization from "./ProductUtilization";
import CustomBarChart from "components/Graphs/CustomBarChart";
import { CaretUpFilled, CloseOutlined } from "@ant-design/icons";
import { AlertBanner } from "styles/pages/STRFileUpload/index";

const Dashboard = () => {
  const { theme } = useMetaData();
  const { Title, Text } = Typography;
  const [showAlert, setShowAlert] = useState(true);

  const getEndOfLastMonth = () => {
    const today = new Date();
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // 0th day of current month
    return endOfLastMonth.toLocaleDateString("en-US"); // Format: MM/DD/YYYY
  };

  const radardata = [
    {
      subject: "Plan\n Document\n to System",
      value: 2500,
    },
    {
      subject: "Plan Document to Service Agreement",
      value: 623,
    },

    {
      subject: "Service \n Agreement\n to System",
      value: 859,
    },
  ];

  const renderDot = (props) => {
    const { cx, cy, payload } = props;

    // Extract the value from the payload using the correct data key
    const value = payload?.value;

    // Default style
    let fillColor = "#A0A0A0"; // blue
    let radius = 18;
    let displayValue = value;
    let fontSize = 10;

    // Format value and set red color if > 2000
    if (value > 2000) {
      fillColor = "#A0A0A0"; // redEB5757
      radius = 15;
      displayValue = `${(value / 1000).toFixed(1)}k`; // e.g., 2500 → 2.5k
    }

    return (
      <g>
        {/* Colored dot */}
        <rect
          x={cx - radius}
          y={cy - radius}
          width={radius * 2}
          height={radius * 2}
          fill={fillColor}
          stroke="#fff"
          strokeWidth={2}
          rx={4} // optional: makes corners slightly rounded
        />


        {/* Value inside the dot */}
        <text
          x={cx}
          y={cy + 4} // adjust vertical position
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight="bold"
          fill="#fff"
        >
          {displayValue}
        </text>
      </g>
    );
  };

  // Custom label for 2-line axis
  const CustomTick = ({ payload, x, y, textAnchor }) => {
    const lines = payload.value.split("\n");

    return (
      <text x={x} y={y} textAnchor={textAnchor} fontSize={12} fill="#555">
        {lines.map((line, index) => (
          <tspan x={x} dy={index === 0 ? 0 : 14} key={index}>
            {line}
          </tspan>
        ))}
      </text>
    );
  };
  return (
    <>
      <DashboardSection theme={theme}>
        <BannerImage theme={theme}>
          <Container>
            <Row>
              <Col span={16} style={{ marginTop: 20 }}>
                <p className="subtitle">Welcome</p>
                <h3 className="name">Executive</h3>
                <p className="content">Your Portfolio as of {getEndOfLastMonth()}</p>
              </Col>
              <Col span={6} className="ta">
                {theme === "dark" ? (
                  <img src={TargetDashboardDark} />
                ) : (
                  <img src={TargetDashboard} />
                )}
              </Col>
            </Row>
          </Container>
        </BannerImage>
        <DashboardCard theme={theme}>
          <Container>
            <Row gutter={16} className="mt-negative">
              <Col className="gutter-row" span={8} style={{ marginTop: 50 }}>
                <Card style={{ background: "#eef6ff" }}>
                  <div>
                    <Text style={{ fontSize: 12, fontWeight: 500 }}>
                      TOTAL ASSETS:
                    </Text>
                    <div className="card-content">
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        $515.76B
                      </Text>
                      <div className="card-row">
                        <p className="card-desc">
                          Year to date assets net gain/loss:
                        </p>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px 10px",
                            border: "1px solid #02A373",
                            backgroundColor: "#E6FAF2",
                            borderRadius: "6px",
                            color: "#02A373",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          <CaretUpFilled
                            style={{
                              color: "#02A373",
                              fontSize: 16,
                              marginRight: 4,
                            }}
                          />
                          +$11.5B
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={8} style={{ marginTop: 50 }}>
                <Card style={{ background: "#eef6ff" }}>
                  <div>
                    <Text style={{ fontSize: 12, fontWeight: 500 }}>
                      TOTAL PLANS:
                    </Text>
                    <div className="card-content">
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        40,182
                      </Text>
                      <div className="card-row">
                        <p className="card-desc">
                          Year to date number of plans net gain/loss
                        </p>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px 10px",
                            border: "1px solid #02A373",
                            backgroundColor: "#E6FAF2",
                            borderRadius: "6px",
                            color: "#02A373",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          <CaretUpFilled
                            style={{
                              color: "#02A373",
                              fontSize: 16,
                              marginRight: 4,
                            }}
                          />
                          +812
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={8} style={{ marginTop: 50 }}>
                <Card style={{ background: "#eef6ff" }}>
                  <div>
                    <Text style={{ fontSize: 12, fontWeight: 500 }}>
                      TOTAL PARTICIPANTS:
                    </Text>
                    <div className="card-content" style={{ height: "60px" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        11,423,944
                      </Text>
                      <div className="card-row">
                        <p className="card-desc">
                          Year to date number of participants with a net balance
                          gain/loss:
                        </p>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px 10px",
                            border: "1px solid #02A373",
                            backgroundColor: "#E6FAF2",
                            borderRadius: "6px",
                            color: "#02A373",
                            fontWeight: 600,
                            marginTop: -20,
                            fontSize: 14,
                          }}
                        >
                          <CaretUpFilled
                            style={{
                              color: "#02A373",
                              fontSize: 16,
                              marginRight: 4,
                            }}
                          />
                          +88,153
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            {showAlert && (
              <AlertBanner theme={theme} style={{ marginTop: "20px" }}>
                <Alert
                  message="📢 The market will close early today due to holiday."
                  type="warning"
                  closable
                  onClose={() => setShowAlert(false)}
                  closeIcon={<CloseOutlined />}
                  showIcon={false}
                  action={
                    <Button
                      type="text"
                      size="small"
                      onClick={() => setShowAlert(false)}
                      style={{ color: "#666" }}
                    >
                      Dismiss
                    </Button>
                  }
                />
              </AlertBanner>
            )}
          </Container>
          <Container className="mt-positive pb">
            <Row gutter={16} className="gp">

              <Col className="gutter-row" span={12}>
                <Card className="graph-card" style={{ background: "white" }}>
                  <ProductUtilization endOfLastMonth={getEndOfLastMonth} />
                </Card>
              </Col>

              <Col span={12} style={{ marginTop: -20 }}>
                <Portfolio />
              </Col>
              <Col span={24} style={{ marginTop: -20 }}>
                <ProductException />
              </Col>

              <Col span={24} style={{ marginTop: -20 }}>
                <Advisory endOfLastMonth={getEndOfLastMonth} />
              </Col>
              <Col className="gutter-row" span={12}>
                <Card
                  className="graph-card"
                  style={{ background: "white", height: 580 }}
                >
                  <Documentinventory />
                  <Title level={5} style={{ marginLeft: 20, marginTop: 10 }}>
                    % of Plans Missing Documents by Document Type
                  </Title>

                  <CustomBarChart />
                </Card>
              </Col>
              <Col className="gutter-row" span={12}>
                <Card className="graph-card" style={{ background: "white" }}>
                  <ResponsiveContainer width="100%" height={535}>
                    <Row
                      justify="space-between"
                      align="middle"
                      style={{ marginTop: -5 }}
                    >
                      <Col>
                        <Title level={5} style={{ margin: 0 }}>
                          Potential Risks
                        </Title>
                      </Col>
                      <Col>
                        <Text
                          style={{
                            color: "#888888",
                            fontWeight: 500,
                            margin: 0,
                          }}
                        >
                          as of {getEndOfLastMonth()}
                        </Text>
                      </Col>
                    </Row>
                    <Text style={{ color: "#858687", fontWeight: 600, fontSize: 14 }}>
                      Complete Inventory:{" "}
                      <Text strong style={{ color: "#000" }}>
                        36,387
                      </Text>{" "}
                      plans and{" "}
                      <Text strong style={{ color: "#000" }}>
                        320,233
                      </Text>{" "}
                      documents
                    </Text>
                    <br />
                    <Text
                      style={{
                        color: "#858687",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Action Items- Click Number For Additional Information
                    </Text>
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="85%"
                      style={{ fontWeight: 700, fontSize: 12 }}
                      data={radardata}
                      startAngle={90}
                      endAngle={450}
                    >
                      <PolarGrid
                        gridType="polygon"
                        style={{ color: "#ACACAC" }}
                      />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={<CustomTick />}
                        radius={100}
                      />

                      <Radar
                        name="Risk"
                        dataKey="value"
                        stroke="#007aff"
                        strokeWidth={2}
                        fill="#D7EAF8"
                        fillOpacity={0.6}
                        dot={renderDot}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </Container>
        </DashboardCard>
      </DashboardSection>
    </>
  );
};

export default Dashboard;
