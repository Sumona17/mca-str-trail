import React from "react";
//import { opportunityColumns, opportunityDataSource } from './DummyData'
import { CompactTableWrapper } from "styles/components/Layout";
import TableComponent from "components/Table";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const opportunityColumns = [
  {
    title: "Feature",
    dataIndex: "feature",
    key: "feature",
    render: (text) => {
      const redFeatures = [
        "Custom investments",
        "Hardship Authorizations (Recordkeeper)",
      ];
      const thumbsDownFeatures = redFeatures;

      const isThumbsDown = thumbsDownFeatures.includes(text);
      const icon = isThumbsDown ? (
        <DislikeOutlined style={{ color: "#EB5757" }} />
      ) : (
        <LikeOutlined style={{ color: "#02A373" }} />
      );

      const color = isThumbsDown ? "#EB5757" : "#02A373";

      return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color }}>{text}</span>
          {icon}
        </div>
      );
    },
  }
  ,
  {
    title: "Opportunity AuA",
    dataIndex: "aua",
    key: "aua",
    // sorter: (a, b) =>
    //   parseFloat(a.aua.replace(/[$,]/g, "")) -
    //   parseFloat(b.aua.replace(/[$,]/g, "")),
    render: (text) => <div style={{ padding: '0px 0' }}>{text}</div>,
    align: "right",
  },
  { title: "Opportunity Plans", dataIndex: "plans", key: "plans", align: "center" },
  { title: "Opportunity Type", dataIndex: "ppts", key: "ppts", align: "center" },
];
export const opportunityDataSource = [
  {
    key: "1",
    feature: "Auto-Enroll",
    aua: "$100,000M",
    plans: "4,000",
    ppts: "Revenue",
  },
  {
    key: "2",
    feature: "Managed Account",
    aua: "$78,000M",
    plans: "3,120",
    ppts: "Revenue",
  },
  {
    key: "3",
    feature: "Self Attestation Hardship",
    aua: "$75,000M",
    plans: "3,000",
    ppts: "Reduced Cost",
  },

  {
    key: "4",
    feature: "eDelivery",
    aua: "$34,000M",
    plans: "1,360",
    ppts: "Reduced Cost",
  },
  {
    key: "5",
    feature: "Custom investments",
    aua: "$53,000M",
    plans: "2,120",
    ppts: "Reduced Cost",
  },
  {
    key: "6",
    feature: "Hardship Authorizations (Recordkeeper)",
    aua: "$723M",
    plans: "29",
    ppts: "Reduced Cost",
  },
];
const Portfolio = () => {
  return (
    <CompactTableWrapper>
      <TableComponent
        title="Portfolio Opportunities​"
        isPagination={false}
        columns={opportunityColumns}
        data={opportunityDataSource}
        size="small"
      />
    </CompactTableWrapper>
  );
};

export default Portfolio;
