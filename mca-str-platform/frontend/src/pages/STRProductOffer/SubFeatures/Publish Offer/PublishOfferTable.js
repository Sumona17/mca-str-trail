import React from "react";
import { Table, Typography } from "antd";
import { StyledTable } from "styles/pages/STRPlanOrder";

const { Text } = Typography;

const PublishOfferTable = () => {
  const columns = [
    {
      title: <div></div>,
      dataIndex: "name",
      key: "name",
      className: "column-lightblue",
      width: "20%",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text>{record.name}</Text>
        </div>
      ),
    },
    {
      title: <div>MCA Sugg.</div>,
      dataIndex: "mcaSuggested",
      key: "mcaSuggested",
      className: "column-lightblue",
       width: "10%",
    },
    {
      title: <div>Rating</div>,
      dataIndex: "rating",
      key: "rating",
      className: "column-lightblue",
      width: "12%",
    },
    {
      title: <div>Fee Type</div>,
      dataIndex: "feeType",
      key: "feeType",
      className: "column-lightblue",
      width: "12%",
    },
    {
      title: <div>Fee Range</div>,
      dataIndex: "feeRange",
      key: "feeRange",
      className: "column-lightblue",
    },
    {
      title: <div>Comments</div>,
      dataIndex: "comments",
      key: "comments",
      className: "column-lightblue",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Auto Enroll (ACA)",
      mcaSuggested: "Mkt Dem: M Sales Imp: M Ind Rating: A",
      rating: "Allowed",
      feeType: "",
      feeRange: "",
      comments: "",
    },
    {
      key: "2",
      name: "Auto Enroll (EACA)",
      mcaSuggested: "Mkt Dem: M Sales Imp: M Ind Rating: A",
      rating: "Preffered",
      feeType: "Base",
      feeRange: "",
      comments: "Auto-enroll built into base fee.",
    },
    {
      key: "3",
      name: "Auto Enroll (QACA)",
      mcaSuggested: "Mkt Dem: M Sales Imp: M Ind Rating: A",
      rating: "Allowed",
      feeType: "",
      feeRange: "",
      comments: "",
    },
    {
      key: "4",
      name: "Normal Enrollment",
      mcaSuggested: "Mkt Dem: M Sales Imp: M Ind Rating: A",
      rating: "Not-Permitted",
      feeType: "",
      feeRange: "",
      comments: "",
    },
  ];

  return (
    <StyledTable>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </StyledTable>
  );
};

export default PublishOfferTable;
