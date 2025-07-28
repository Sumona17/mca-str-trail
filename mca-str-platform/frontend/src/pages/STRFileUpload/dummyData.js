import React from "react";
import { Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export const columns = (currentPage = 1, pageSize = 10) => [
  {
    title: "#",
    dataIndex: "serialNumber",
    key: "serialNumber",
    width: 50,
    render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
  },
  {
    title: "Employer",
    dataIndex: "employer",
    key: "employer",
    sorter: (a, b) => a.employer.localeCompare(b.employer),
  },

 {
  title: "Plan",
  dataIndex: "plan",
  key: "plan",
  sorter: (a, b) => a.plan.localeCompare(b.plan),
  width: 200, 
  render: (text) => (
    <a
      href="#"
      style={{
        color: "#1890ff",
        textDecoration: "underline",
        whiteSpace: "normal",   
        wordBreak: "break-word" 
      }}
    >
      {text}
    </a>
  ),
},

  {
    title: "Plan ID",
    dataIndex: "planId",
    key: "planId",
    sorter: (a, b) => a.planId.localeCompare(b.planId),
    render: (text) => (
      <a href="#" style={{ color: "#1890ff", textDecoration: "underline" }}>
        {text}
      </a>
    ),
  },
  {
    title: "Plan Type",
    dataIndex: "planType",
    key: "planType",
    sorter: (a, b) => a.planType.localeCompare(b.planType),
    align: "center",
  },
  {
    title: "Ppts",
    dataIndex: "participants",
    key: "participants",
    sorter: (a, b) => a.participants - b.participants,
    align: "right",
  },
  {
    title: "Total Assets",
    dataIndex: "totalAssets",
    key: "totalAssets",
    sorter: (a, b) =>
      parseFloat(a.totalAssets.replace(/[$,]/g, "")) -
      parseFloat(b.totalAssets.replace(/[$,]/g, "")),
    align: "right",
  },
  {
    title: "Action Items",
    dataIndex: "actionItems",
    key: "actionItems",
    sorter: (a, b) => a.actionItems - b.actionItems,
    align: "center",
    render: (count) => (
      <span
        style={{
          padding: "4px",

          fontSize: "14px",
        }}
      >
        {count}
      </span>
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    width: 80,
    render: () => (
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <Button
          type="text"
          icon={<EyeOutlined />}
          size="small"
          // onClick={() => editData(`/view-plan/${data?.key}`, data, pageType)}
          style={{ padding: "4px", color: '#0770BF' }}
        />
      </div>
    ),
  },
];

export const actionItemColumns = (currentPage = 1, pageSize = 10) => [
  {
    title: "#",
    dataIndex: "serialNumber",
    key: "serialNumber",
    width: 50,
    render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
  },
  {
    title: "Plan",
    dataIndex: "plan",
    key: "plan",
    sorter: (a, b) => a.plan.localeCompare(b.plan),
    render: (text) => (
      <a href="#" style={{ color: "#1890ff", textDecoration: "underline" }}>
        {text}
      </a>
    ),
  },
  {
    title: "Plan ID",
    dataIndex: "planId",
    key: "planId",
    sorter: (a, b) => a.planId.localeCompare(b.planId),
    render: (text) => (
      <a href="#" style={{ color: "#1890ff", textDecoration: "underline" }}>
        {text}
      </a>
    ),
  },
  {
    title: "Risk Level",
    dataIndex: "riskLevel",
    key: "riskLevel",
    sorter: (a, b) => a.riskLevel.localeCompare(b.riskLevel),
    render: (level) => {
      let color = "default";
      let bgColor = "#f0f0f0";
      let width = "60px"

      switch (level) {
        case "High":
          color = "white";
          bgColor = "#fa164b";
          width = "60px"
          break;
        case "Medium":
          color = "white";
          bgColor = "#ff7440";
          width = "60px"
          break;
        case "Low":
          color = "white";
          bgColor = "#b1b1b1";
          width = "60px"
          break;
      }

      return (
        <Tag
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgColor,
            color: color,
            border: "none",
            fontWeight: "500",
            width: width,
          }}
        >
          {level}
        </Tag>
      );
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status) => {
      return <span>{status}</span>;
    },
  },
  {
    title: "Assignee",
    dataIndex: "assignee",
    key: "assignee",
    sorter: (a, b) => a.assignee.localeCompare(b.assignee),
  },
  {
    title: "Identified",
    dataIndex: "identified",
    key: "identified",
    sorter: (a, b) => new Date(a.identified) - new Date(b.identified),
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
    sorter: (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    width: 80,
    render: () => (
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <Button
          type="text"
          icon={<EyeOutlined />}
          size="small"
          // onClick={() => editData(`/view-action/${data?.key}`, data, pageType)}
          style={{ padding: "4px", color: '#0770BF' }}
        />
      </div>
    ),
  },
];

export const dataSource = [
  {
    key: "1",
    employer: "Joe Frazier Box Co.",
    plan: "Joe Frazier Union Plan",
    planId: "1234567-03",
    planType: "Taft-Hartley",
    participants: "1,988",
    totalAssets: "$19,745,600",
    actionItems: 0,
    product: "D-Mid-market 401(k)TH",
  },
  {
    key: "2",
    employer: "Joe Frazier Box Co.",
    plan: "Joe Frazier Retirement Plan",
    planId: "1234567-01",
    planType: "401(k)",
    participants: "1,432",
    totalAssets: "$18,345,210",
    actionItems: 1,
    product: "A-Mid-market 401(k)",
  },
  {
    key: "3",
    employer: "Joe Frazier Box Co.",
    plan: "Joe Frazier Retirement Profit Sharing Plan",
    planId: "1234567-02",
    planType: "401(a)",
    participants: "1,723",
    totalAssets: "$16,234,899",
    actionItems: 1,
    product: "B-NS Custom Offer",
  },
  {
    key: "4",
    employer: "Fast Paced Car Repair",
    plan: "FPCP 401(k) Plan",
    planId: "99-2468013",
    planType: "401(k)",
    participants: "1,875",
    totalAssets: "$12,067,312",
    actionItems: 2,
    product: "A-Mid-market 401(k)",
  },
  {
    key: "5",
    employer: "Knight Train Railroad",
    plan: "Knight Train 401(k) Plan",
    planId: "98-1234567",
    planType: "401(k)",
    participants: "1,205",
    totalAssets: "$11,783,492",
    actionItems: 3,
    product: "A-Mid-market 401(k)",
  },
  {
    key: "6",
    employer: "Bigtime Bank, LLC",
    plan: "Bigtime Bank Profit Sharing",
    planId: "98-8642975",
    planType: "457",
    participants: "1,593",
    totalAssets: "$9,200,588",
    actionItems: 0,
    product: "Mid-market PS",
  },
  {
    key: "7",
    employer: "SC Teachers Association",
    plan: "SC Teacher's Retirement",
    planId: "99-2468013",
    planType: "403(b)",
    participants: "1,114",
    totalAssets: "$8,893,400",
    actionItems: 0,
    product: "Mid-market 403(b)",
  },
];

export const actionItemsDataSource = [
  {
    key: "1",
    plan: "Bigtime Bank Profit Sharing",
    planId: "98-8642975",
    riskLevel: "High",
    type: "Plan Doc/Service",
    category: "Auto-enrollment Election",
    status: "Past Due",
    assignee: "Emma Watson",
    identified: "5/25/2025",
    dueDate: "6/5/2025",
  },
  {
    key: "2",
    plan: "Joe Frazier Retirement Plan",
    planId: "88-1234567",
    riskLevel: "High",
    type: "Missing Document",
    category: "Legal Plan Document",
    status: "Open",
    assignee: "Chris Michaels",
    identified: "6/11/2025",
    dueDate: "6/21/2025",
  },
  {
    key: "3",
    plan: "Knight Train 401(k) Plan",
    planId: "98-1234567",
    riskLevel: "Medium",
    type: "Service/System",
    category: "Hardship Wd - Ppt. Self Attest.",
    status: "In-progress",
    assignee: "Michelle Landa",
    identified: "6/1/2025",
    dueDate: "6/15/2025",
  },
  {
    key: "4",
    plan: "Bob's Super Market Retirement Plan",
    planId: "99-1357924",
    riskLevel: "Low",
    type: "Service Agreement Expiration",
    category: "Svc. Agrmt. Expiration 8/1/2025",
    status: "Open",
    assignee: "Jorge Ronquillo",
    identified: "5/15/2025",
    dueDate: "7/15/2025",
  },
  {
    key: "5",
    plan: "Knight Train 401(k) Plan",
    planId: "98-1234567",
    riskLevel: "High",
    type: "Service Fee",
    category: "Installment Payment Fee",
    status: "Past Due",
    assignee: "Michelle Landa",
    identified: "4/15/2025",
    dueDate: "5/31/2025",
  },

  // {
  //   key: "7",
  //   plan: "Fast Paced Car Repair",
  //   planId: "99-2468013",
  //   riskLevel: "High",
  //   type: "Testing",
  //   category: "ADP Testing Failure",
  //   status: "Open",
  //   assignee: "Sarah Johnson",
  //   identified: "6/1/2025",
  //   dueDate: "6/30/2025",
  // },
  // {
  //   key: "8",
  //   plan: "Fast Paced Car Repair",
  //   planId: "99-2468013",
  //   riskLevel: "Medium",
  //   type: "Service/System",
  //   category: "Loan Processing Issue",
  //   status: "In-progress",
  //   assignee: "Sarah Johnson",
  //   identified: "5/28/2025",
  //   dueDate: "6/20/2025",
  // },
  // {
  //   key: "9",
  //   plan: "State Insurance Partners",
  //   planId: "88-1357924",
  //   riskLevel: "Low",
  //   type: "Compliance",
  //   category: "Summary Plan Description Update",
  //   status: "Open",
  //   assignee: "David Chen",
  //   identified: "6/5/2025",
  //   dueDate: "8/15/2025",
  // },
  // {
  //   key: "10",
  //   plan: "Joe Frazier Retirement Plan",
  //   planId: "88-1234567",
  //   riskLevel: "Medium",
  //   type: "Plan Doc/Service",
  //   category: "Beneficiary Designation Issues",
  //   status: "Open",
  //   assignee: "Chris Michaels",
  //   identified: "6/8/2025",
  //   dueDate: "7/8/2025",
  // },
  // {
  //   key: "11",
  //   plan: "Bob's Super Market Retirement Plan",
  //   planId: "99-1357924",
  //   riskLevel: "High",
  //   type: "Compliance",
  //   category: "Audit Findings Response",
  //   status: "Past Due",
  //   assignee: "Jorge Ronquillo",
  //   identified: "5/1/2025",
  //   dueDate: "6/1/2025",
  // },
  // {
  //   key: "12",
  //   plan: "Healthcare Solutions Inc",
  //   planId: "77-9876543",
  //   riskLevel: "Medium",
  //   type: "Service/System",
  //   category: "Payroll Integration Error",
  //   status: "In-progress",
  //   assignee: "Lisa Park",
  //   identified: "6/10/2025",
  //   dueDate: "6/25/2025",
  // },
  // {
  //   key: "13",
  //   plan: "Tech Innovations LLC",
  //   planId: "55-4567890",
  //   riskLevel: "Low",
  //   type: "Plan Doc/Service",
  //   category: "Investment Policy Statement Review",
  //   status: "Open",
  //   assignee: "Mark Thompson",
  //   identified: "6/12/2025",
  //   dueDate: "8/1/2025",
  // },
  // {
  //   key: "14",
  //   plan: "Manufacturing Plus Corp",
  //   planId: "44-3456789",
  //   riskLevel: "High",
  //   type: "Testing",
  //   category: "Top Heavy Test Failure",
  //   status: "Open",
  //   assignee: "Rachel Green",
  //   identified: "6/5/2025",
  //   dueDate: "6/30/2025",
  // },
  // {
  //   key: "15",
  //   plan: "Retail Express Inc",
  //   planId: "33-2345678",
  //   riskLevel: "Medium",
  //   type: "Compliance",
  //   category: "Notice Distribution Delay",
  //   status: "In-progress",
  //   assignee: "Tom Wilson",
  //   identified: "6/3/2025",
  //   dueDate: "6/18/2025",
  // },
  // {
  //   key: "16",
  //   plan: "Service Pro LLC",
  //   planId: "22-1234567",
  //   riskLevel: "Low",
  //   type: "Service Agreement Expiration",
  //   category: "TPA Agreement Renewal",
  //   status: "Open",
  //   assignee: "Amy Davis",
  //   identified: "6/7/2025",
  //   dueDate: "9/1/2025",
  // },
  // {
  //   key: "17",
  //   plan: "Global Logistics Corp",
  //   planId: "11-0987654",
  //   riskLevel: "High",
  //   type: "Missing Document",
  //   category: "Adoption Agreement Missing",
  //   status: "Past Due",
  //   assignee: "Kevin Brown",
  //   identified: "5/20/2025",
  //   dueDate: "6/10/2025",
  // },
];

// Filter options derived from data
export const getFilterOptions = () => {
  const planTypes = [...new Set(dataSource.map((item) => item.planType))];
  const products = [...new Set(dataSource.map((item) => item.product))];
  const riskLevels = [
    ...new Set(actionItemsDataSource.map((item) => item.riskLevel)),
  ];
  const categories = [
    ...new Set(actionItemsDataSource.map((item) => item.category)),
  ];
  const statuses = [
    ...new Set(actionItemsDataSource.map((item) => item.status)),
  ];
  const employers = [...new Set(dataSource.map((item) => item.employer))];
  const assignees = [
    ...new Set(actionItemsDataSource.map((item) => item.assignee)),
  ];

  return {
    planTypes,
    products,
    riskLevels,
    categories,
    statuses,
    employers,
    assignees,
  };
};

// Helper function to get formatted current date
const getCurrentFormattedDate = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() returns 0-11
  const day = now.getDate();
  const year = now.getFullYear();

  return `${month}/${day}/${year}`;
};

export const getDashboardStats = () => {
  const totalPlans = 45;
  const totalAssets = 562.3;
  const totalParticipants = 22512;
  const totalActionItems = actionItemsDataSource.length;
  const plansNeedingAction = 10;

  return {
    totalPlans,
    totalAssets: `$${totalAssets}M`,
    totalParticipants: totalParticipants.toLocaleString(),
    totalActionItems,
    plansNeedingAction,
    welcomeMessage: "Welcome Chris!",
    dateAsOf: `Your plans as of ${getCurrentFormattedDate()}`,
    marketAlert: "Alert: The market will close early today due to holiday.",
  };
};

export const extendedPlansData = [
  ...dataSource,

  {
    key: "8",
    employer: "Healthcare Solutions Inc",
    plan: "Healthcare Solutions 401(k)",
    planId: "77-9876543",
    planType: "401(k)",
    participants: 890,
    totalAssets: "$7,432,100",
    actionItems: 1,
    product: "Mid-market 401(k)",
  },
  {
    key: "9",
    employer: "Tech Innovations LLC",
    plan: "Tech Innovations Retirement Plan",
    planId: "55-4567890",
    planType: "401(k)",
    participants: 654,
    totalAssets: "$6,890,200",
    actionItems: 1,
    product: "Custom Offer B",
  },
  {
    key: "10",
    employer: "Manufacturing Plus Corp",
    plan: "Manufacturing Plus 401(k)",
    planId: "44-3456789",
    planType: "401(k)",
    participants: 1245,
    totalAssets: "$8,765,400",
    actionItems: 1,
    product: "Mid-market 401(k)",
  },
];

export default {
  columns,
  actionItemColumns,
  dataSource,
  actionItemsDataSource,
  getFilterOptions,
  getDashboardStats,
  extendedPlansData,
};