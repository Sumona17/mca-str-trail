import React from "react";
//import { dataSource, columns } from './DummyData'
import { ContainerTable } from "styles/components/Layout";
import TableComponent from "components/Table";
import { Space, Button ,Typography} from "antd";
import viewicon from "assets/images/viewicon.png";
import { useNavigate } from "react-router-dom";
const handleView = () => {};
export const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Employer",
    dataIndex: "employer",
    key: "employer",
    render: (text) => (
      <span
        style={{
          color: "#1677ff",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {text}
      </span>
    ),
    sorter: (a, b) => a.employer.localeCompare(b.employer),
  },
  {
    title: "Plan",
    dataIndex: "plan",
    key: "plan",
    render: (text) => (
      <span
        style={{
          color: "#1677ff",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {text}
      </span>
    ),
    sorter: (a, b) => a.plan.localeCompare(b.plan),
  },
  {
    title: "Plan ID",
    dataIndex: "planId",
    key: "planId",
    render: (text) => (
      <span
        style={{
          color: "#1677ff",
          cursor: "pointer",
          textDecoration: "underline",
          whiteSpace: "nowrap", // Ensures single-line display
        }}
      >
        {text}
      </span>
    ),
    sorter: (a, b) => a.planId.localeCompare(b.planId),
  },
  {
    title: "Plan Type",
    dataIndex: "planType",
    key: "planType",
    sorter: (a, b) => a.planType.localeCompare(b.planType),
  },
  {
    title: "Ppts",
    dataIndex: "ppts",
    key: "ppts",
    sorter: (a, b) => {
      a.ppts - b.ppts;
    },
  },
  {
    title: "Total Assets",
    dataIndex: "totalAssets",
    key: "totalAssets",
    sorter: (a, b) => {
      const a1 = parseFloat(a.totalAssets.replace(/[$,]/g, ""));
      const b1 = parseFloat(b.totalAssets.replace(/[$,]/g, ""));
      return a1 - b1;
    },
  },
  {
    title: "Action Items",
    dataIndex: "actionItems",
    key: "actionItems",
    sorter: (a, b) => a.actionItems - b.actionItems,
    align: "center",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Button
        type="link"
        icon={<img src={viewicon} alt="view" />}
        onClick={() => handleView(record)}
      />
    ),
  },
];

export const dataSource = [
  {
    key: "1",
    employer: "State Insurance Partners",
    plan: "State Ins Partners Savings Plan",
    planId: "88-1357924",
    planType: "401(k)",
    ppts: 1988,
    totalAssets: "$19,745,600",
    actionItems: 0,
    product: "Mid-market 401(k)",
  },
  {
    key: "2",
    employer: "Joe Frazier Box Co.",
    plan: "Joe Frazier Retirement Plan",
    planId: "98-1234567",
    planType: "401(k)",
    ppts: 1432,
    totalAssets: "$18,345,210",
    actionItems: 1,
    product: "Mid-market 401(k)",
  },
  {
    key: "3",
    employer: "Bob’s Supermarket",
    plan: "Bob’s Super Market Retirement Plan",
    planId: "99-1357924",
    planType: "401(k)",
    ppts: 1723,
    totalAssets: "$16,234,899",
    actionItems: 1,
    product: "Custom Offer A",
  },
  {
    key: "4",
    employer: "East Paced Car Repair",
    plan: "FPCP 401(k) Plan",
    planId: "99-2468013",
    planType: "401(k)",
    ppts: 1875,
    totalAssets: "$12,067,312",
    actionItems: 2,
    product: "Mid-market 401(k)",
  },
  {
    key: "5",
    employer: "Knight Train Railroad",
    plan: "Knight Train 401(k) Plan",
    planId: "98-1234567",
    planType: "401(k)",
    ppts: 1205,
    totalAssets: "$11,783,492",
    actionItems: 3,
    product: "Mid-market 401(k)",
  },
  {
    key: "6",
    employer: "Bigtime Bank, LLC",
    plan: "Bigtime Bank Profit Sharing",
    planId: "98-8642975",
    planType: "401(a)",
    ppts: 1593,
    totalAssets: "$9,200,588",
    actionItems: 0,
    product: "Mid-market PS",
  },
  {
    key: "7",
    employer: "SC Teachers Association",
    plan: "SC Teacher’s Retirement",
    planId: "99-2468013",
    planType: "403(b)",
    ppts: 1114,
    totalAssets: "$8,893,400",
    actionItems: 0,
    product: "Mid-market 403(b)",
  },
];

const ProductAdoption = () => {
  const { Text } = Typography;
  const navigate = useNavigate();
const dashboardpage =()=>{
 navigate("/");
}
  const getEndOfMonth = () => {
    const today = new Date();
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // 0th day of current month
    return endOfLastMonth.toLocaleDateString("en-US"); // Format: MM/DD/YYYY
  };
  return (
    <ContainerTable>
      <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end'}}>
      <Button type='primary' onClick={dashboardpage}>Close</Button>
      </div>
      <TableComponent
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: 16 }}>Your Plans</span>

            <Space>
              <Text style={{ color: "#888888", fontWeight: 500 }}>
                as of {getEndOfMonth()}
              </Text>
            </Space>
          </div>
        }
        columns={columns}
        data={dataSource}
      />
    </ContainerTable>
  );
};

export default ProductAdoption;
