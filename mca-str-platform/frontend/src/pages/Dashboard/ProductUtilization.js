import React from "react";
import { Col, Row, Select, Typography } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

const data = [
  { name: "Product Offer A", value: 140567253, color: "#276070" },
  { name: "Product Offer B", value: 79252328, color: "#8DC6F0" },
  { name: "Product Offer C", value: 200232095, color: "#D7EAF8" },
  { name: "Product Offer D", value: 73232322, color: "#CBE85B" },
  { name: "Product Offer E", value: 99872330, color: "#99B13B" },
  { name: "Product Offer F", value: 25012767, color: "#0871C0" },
];
const renderCustomLabelLine = ({ cx, cy, midAngle, outerRadius }) => {
  const RADIAN = Math.PI / 180;

  const radialLength = 20;
  const horizontalLength = 40;

  // Add a small gap before the dot
  const dotOffset = 4; // Increase this for more spacing

  const dotX = cx + (outerRadius + dotOffset) * Math.cos(-midAngle * RADIAN);
  const dotY = cy + (outerRadius + dotOffset) * Math.sin(-midAngle * RADIAN);

  const midX = cx + (outerRadius + radialLength) * Math.cos(-midAngle * RADIAN);
  const midY = cy + (outerRadius + radialLength) * Math.sin(-midAngle * RADIAN);

  const isRightSide = midX > cx;
  const endX = isRightSide ? midX + horizontalLength : midX - horizontalLength;

  return (
    <g>
      {/* Small round dot slightly outside the pie */}
      <circle cx={dotX} cy={dotY} r={3} fill="#999" />

      {/* Radial line starts from dot position */}
      <line
        x1={dotX}
        y1={dotY}
        x2={midX}
        y2={midY}
        stroke="#999"
        strokeWidth={1}
      />

      {/* Horizontal line */}
      <line
        x1={midX}
        y1={midY}
        x2={endX}
        y2={midY}
        stroke="#999"
        strokeWidth={1}
      />
    </g>
  );
};

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const RADIAN = Math.PI / 180;

  const radialLength = 20;
  const horizontalLength = 40;

  const midX = cx + (outerRadius + radialLength) * Math.cos(-midAngle * RADIAN);
  const midY = cy + (outerRadius + radialLength) * Math.sin(-midAngle * RADIAN);

  const isRightSide = midX > cx;
  const labelX = isRightSide
    ? midX + horizontalLength + 4
    : midX - horizontalLength - 4;

  return (
    <text
      x={labelX}
      y={midY}
      fill="#000"
      textAnchor={isRightSide ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {/* First line: Product name */}
      <tspan x={labelX} dy="-0.5em" fontWeight={400}>
        {data[index].name}
      </tspan>
      {/* Second line: Value */}
      <tspan x={labelX} dy="1.2em" fontWeight={700}>
        ${data[index].value.toLocaleString()}
      </tspan>
    </text>
  );
};

// const renderCustomLabel = ({
//   cx,
//   cy,
//   midAngle,
//   //innerRadius,
//   outerRadius,
//   index,
// }) => {
//   const RADIAN = Math.PI / 180;
//   const radius = outerRadius + 20;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="#000"
//       textAnchor={x > cx ? 'start' : 'end'}
//       dominantBaseline="central"
//       fontSize={12}
//     >
//        <tspan fontWeight={400}>{data[index].name} </tspan>
//       <tspan fontWeight={700}>{data[index].value.toLocaleString()}$</tspan>
//     </text>
//   );
// };

const selectStyle = {
  width: "100%",
  borderRadius: "999px",
  padding: "4px 12px",
  border: "1px solid #000",
  background: "#fff",
};
const arrowColor = "#000";
const tabStyle = {
  fontSize: 14,
  padding: "6px 15px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 500,
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: "#0065D1",
  color: "#ffffff",
};

const inactiveTabStyle = {
  ...tabStyle,
  backgroundColor: "#E6F0FA",
  color: "#0065D1",
};

const CustomSelect = ({ defaultValue, children }) => (
  <Select
    defaultValue={defaultValue}
    style={selectStyle}
    bordered={false}
    suffixIcon={<DownOutlined style={{ color: arrowColor, fontSize: 12 }} />}
  >
    {children}
  </Select>
);

const ProductUtilization = ({ endOfLastMonth }) => {
  const { Text } = Typography;
  const navigate = useNavigate();

  const handleSliceClick = () => {
    // Optional: Pass data with navigation if needed
    navigate("/productadoption");
  };

  return (
    <Col span={22}>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: -10, marginBottom: 20 }}
      >
        <Col>
          <Title level={5} style={{ margin: 0 }}>
            Product Offer Utilization
          </Title>
        </Col>
        <Col>
          <Text style={{ color: "#888888", fontWeight: 500, margin: 0 }}>
            as of {endOfLastMonth()}
          </Text>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <CustomSelect defaultValue="all">
            <Option value="all">Plan Type</Option>
          </CustomSelect>
        </Col>
        <Col span={8}>
          <CustomSelect defaultValue="market">
            <Option value="market">Market</Option>
          </CustomSelect>
        </Col>
        <Col span={8}>
          <CustomSelect defaultValue="filters">
            <Option value="filters">Other Filters</Option>
          </CustomSelect>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          marginBottom: 8,
          backgroundColor: "#E6F0FA",
          borderRadius: "999px",
          padding: "2px",
          width: "fit-content",
        }}
      >
        <div style={activeTabStyle}>Total Assets</div>
        <div style={inactiveTabStyle}>Total Plans</div>
        <div style={inactiveTabStyle}>Total Participants</div>
        <div style={inactiveTabStyle}>Total Revenue</div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
              labelLine={renderCustomLabelLine}
              label={renderCustomLabel}
              isAnimationActive={false}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={1}
                  onClick={() => {
                    if (entry.name === "Product Offer A") {
                      handleSliceClick(entry, index);
                    }
                  }}
                  style={{
                    cursor: entry.name === "Product Offer A" ? "pointer" : "default",
                    outline: "none",
                    border: "none",
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Col>
  );
};

export default ProductUtilization;
