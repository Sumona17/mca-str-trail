import React, { useState } from "react";
import { Input, Button, Space, Modal, Descriptions, Typography } from "antd";
import { ContainerTable } from "styles/components/Layout";
import TableComponent from "components/Table";
import viewicon from "assets/images/viewicon.png";
import {
  SearchOutlined,
  FilterOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

// export const productColumns = [
//   { title: '#', dataIndex: 'key', key: 'key' },
//   {
//     title: 'Product Offer',
//     dataIndex: 'productOffer',
//     key: 'productOffer',
//      render: (text) => (
//     <span style={{ color: '#1677ff', cursor: 'pointer', textDecoration: 'underline' }}>
//       {text}
//     </span>
//   ),
//   },
//   { title: 'Target Market', dataIndex: 'targetMarket', key: 'targetMarket' },
//   { title: 'Plan Type', dataIndex: 'planType', key: 'planType' },
//   { title: 'Assets', dataIndex: 'assets', key: 'assets' },
//   { title: 'Plans', dataIndex: 'plans', key: 'plans' },
//   { title: 'Total Exceptions', dataIndex: 'totalExceptions', key: 'totalExceptions' ,align: 'center',
//       className: 'exception-col'},
//   {
//   title: () => (
//     <div
//       style={{
//         borderBottom: '2px solid #1677ff',
//         paddingBottom: 8,
//         fontWeight: 500,
//         fontSize: 14,
//         textAlign: 'center',
//         marginBottom:-16,
//       }}
//     >
//       Exception by Type
//     </div>
//   ),
//   children: [
//     {
//       title: 'Money Source',
//       dataIndex: 'moneySource',
//       key: 'moneySource',
//       align: 'center',
//     },
//     {
//       title: 'Enrollment',
//       dataIndex: 'enrollment',
//       key: 'enrollment',
//       align: 'center',
//     },
//     {
//       title: 'Loan',
//       dataIndex: 'loan',
//       key: 'loan',
//       align: 'center',
//     },
//     {
//       title: 'Pricing',
//       dataIndex: 'pricing',
//       key: 'pricing',
//       align: 'center',
//     },
//   ],
// }
// ,
//   {
//     title: '',
//     key: 'action',
//     render: (_, record) => (
//       <Button
//         type="link"
//         icon={<img src={viewicon} alt="view" />}
//         onClick={() => handleView(record)}
//       />
//     ),
//   },
// ];

export const productDataSource = [
  {
    key: "1",
    productOffer: "Product Offer A",
    targetMarket: "Mid",
    planType: "401(k)",
    assets: "$140,567,253",
    plans: "7,036",
    totalExceptions: "2,111",
    plansExceptions:"20%",
    moneySource: "106",
    enrollment: "633",
    loan: "528",
    pricing: "844",
  },
  {
    key: "2",
    productOffer: "Product Offer B",
    targetMarket: "Mid",
    planType: "401(k)",
    assets: "$79,252,328",
    plans: "5,831",
    totalExceptions: "1,749",
    plansExceptions:"11%",
    moneySource: "87",
    enrollment: "525",
    loan: "437",
    pricing: "700",
  },
  {
    key: "3",
    productOffer: "Product Offer C",
    targetMarket: "Small/Micro",
    planType: "403(b)",
    assets: "$200,232,095",
    plans: "13,073",
    totalExceptions: "3,922",
    plansExceptions:"27%",
    moneySource: "196",
    enrollment: "1,568",
    loan: "981",
    pricing: "1177",
  },
  {
    key: "4",
    productOffer: "Product Offer D",
    targetMarket: "Small/Micro",
    planType: "401(k)",
    assets: "$73,232,322",
    plans: "8,242",
    totalExceptions: "2,473",
    plansExceptions:"22%",
    moneySource: "124",
    enrollment: "742",
    loan: "618",
    pricing: "989",
  },
  {
    key: "5",
    productOffer: "Product Offer E",
    targetMarket: "Mid",
    planType: "401(a)",
    assets: "$9,987,233",
    plans: "1,357",
    totalExceptions: "407",
    plansExceptions:"28%",
    moneySource: "20",
    enrollment: "122",
    loan: "102",
    pricing: "163",
  },
  {
    key: "6",
    productOffer: "Product Offer F",
    targetMarket: "Mid",
    planType: "401(k)",
    assets: "$25,012,767",
    plans: "4,643",
    totalExceptions: "1,393",
    plansExceptions:"29%",
    moneySource: "6",
    enrollment: "35",
    loan: "29",
    pricing: "46",
  },
];

const ProductException = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const handleView = (record) => {
    const enrichedRecord = {
      ...record,
      status: "Active",
      effectiveDate: "8/15/2019",
      avgPerPpt: "$42,968",
      moneySources: [
        {
          source: "Employee Pre-tax",
          rating: "Preferred",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
        {
          source: "Employee Roth",
          rating: "Preferred",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
        {
          source: "Employee After-Tax",
          rating: "Allowed",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
        {
          source: "Employer Match",
          rating: "Allowed",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
        {
          source: "Employer Non-elective",
          rating: "Allowed",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
        {
          source: "Profit Sharing",
          rating: "Allowed",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
      ],
      enrollment: [
        {
          type: "Auto Enroll (ACA)",
          rating: "Preferred",
          feeType: "Base",
          feeRange: "N/A",
          comments: "N/A",
        },
      ],
    };

    setSelectedRecord(enrichedRecord);
    setIsModalVisible(true);
  };
  const productColumns = [
    // {
    //   title: '#',
    //   dataIndex: 'key',
    //   key: 'key',
    //   sorter: (a, b) => a.key - b.key,
    // },
    {
      title: "Product Offer",
      dataIndex: "productOffer",
      key: "productOffer",
      sorter: (a, b) => a.productOffer.localeCompare(b.productOffer),
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
    },
    {
      title: "Target Market",
      dataIndex: "targetMarket",
      key: "targetMarket",
      sorter: (a, b) => a.targetMarket.localeCompare(b.targetMarket),
    },
    {
      title: "Plan Type",
      dataIndex: "planType",
      key: "planType",
      sorter: (a, b) => a.planType.localeCompare(b.planType),
    },
    {
      title: "Assets",
      dataIndex: "assets",
      key: "assets",
      sorter: (a, b) =>
        parseFloat(a.assets.replace(/[$,]/g, "")) -
        parseFloat(b.assets.replace(/[$,]/g, "")),
      align: "right",
    },
    {
      title: "Plans",
      dataIndex: "plans",
      key: "plans",
      sorter: (a, b) => parseFloat(a.plans.replace(/[$,]/g, "")) -
        parseFloat(b.plans.replace(/[$,]/g, "")),
    },
    {
      title: "Total Exceptions",
      dataIndex: "totalExceptions",
      key: "totalExceptions",
      align: "center",
      sorter: (a, b) => parseFloat(a.totalExceptions.replace(/[$,]/g, "")) -
        parseFloat(b.totalExceptions.replace(/[$,]/g, "")),
    },
     {
      title: "% Plans with Exceptions",
      dataIndex: "plansExceptions",
      key: "plansExceptions",
      align: "center",
      className: "exception-col",
      sorter: (a, b) => parseFloat(a.totalExceptions.replace(/[$,]/g, "")) -
        parseFloat(b.totalExceptions.replace(/[$,]/g, "")),
    },
    {
      title: () => (
        <div style={{ position: "relative", width: "100%", marginBottom: -15 }}>
          <div
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 14,
              paddingBottom: 8,
              paddingLeft: 0,
            }}
          >
            Exception by Type
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              width: "100%",
              backgroundColor: "#1677ff",
            }}
          />
        </div>
      ),

      children: [
        {
          title: "Money Source",
          dataIndex: "moneySource",
          key: "moneySource",
          align: "center",
          sorter: (a, b) => a.moneySource - b.moneySource,
        },
        {
          title: "Enrollment",
          dataIndex: "enrollment",
          key: "enrollment",
          align: "center",
          sorter: (a, b) => a.enrollment - b.enrollment,
        },
        {
          title: "Loan",
          dataIndex: "loan",
          key: "loan",
          align: "center",
          sorter: (a, b) => a.loan - b.loan,
        },
        {
          title: "Pricing",
          dataIndex: "pricing",
          key: "pricing",
          align: "center",
          sorter: (a, b) => a.pricing - b.pricing,
        },
      ],
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
  return (
    <ContainerTable>
      <TableComponent
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: 16 }}>
              Product Offer Exceptions
            </span>

            <Space>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                style={{ width: 200 }}
              />
              <Button icon={<FilterOutlined />}>Filter</Button>
              <Button
                icon={<DownloadOutlined />}
                style={{ background: "#276070", color: "#ffffff" }}
              />
            </Space>
          </div>
        }
        columns={productColumns}
        data={productDataSource}
        isPagination={false}
      />

      <Modal
        title="Quick View"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
          <Button type="primary" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
        }
        width={800}
      >
        {selectedRecord && (
          <div>
            {/* Top-level Info */}
            <Descriptions
              bordered
              column={1}
              size="small"
              labelStyle={{ fontWeight: 600, width: 180 }}
              contentStyle={{ fontSize: 14 }}
            >
              <Descriptions.Item label="Product Name">
                {selectedRecord.productOffer}
              </Descriptions.Item>
              <Descriptions.Item label="Status">Active</Descriptions.Item>
              <Descriptions.Item label="Effective Date">
                8/15/2019
              </Descriptions.Item>
              <Descriptions.Item label="Total Plans">
                {selectedRecord.plans}
              </Descriptions.Item>
              <Descriptions.Item label="AUM">
                {selectedRecord.assets}
              </Descriptions.Item>
              <Descriptions.Item label="Avg $/Ppt">$42,968</Descriptions.Item>
            </Descriptions>
            <div style={{ marginTop: 30, marginBottom: 20 }}>
              <Typography.Text>Money Sources:</Typography.Text>
            </div>
            <TableComponent
              size="small"
              isPagination={false}
              data={selectedRecord.moneySources.map((item, index) => ({
                ...item,
                key: index,
              }))}
              columns={[
                { title: "Money Source", dataIndex: "source", key: "source" },
                { title: "Rating", dataIndex: "rating", key: "rating" },
                { title: "Fee Type", dataIndex: "feeType", key: "feeType" },
                { title: "Fee Range", dataIndex: "feeRange", key: "feeRange" },
                { title: "Comments", dataIndex: "comments", key: "comments" },
              ]}
            />

            <div style={{ marginTop: 30, marginBottom: 20 }}>
              <Typography.Text>Enrollment:</Typography.Text>
            </div>
            <TableComponent
              size="small"
              isPagination={false}
              data={selectedRecord.enrollment.map((item, index) => ({
                ...item,
                key: index,
              }))}
              columns={[
                { title: "Enrollment", dataIndex: "type", key: "type" },
                { title: "Rating", dataIndex: "rating", key: "rating" },
                { title: "Fee Type", dataIndex: "feeType", key: "feeType" },
                { title: "Fee Range", dataIndex: "feeRange", key: "feeRange" },
                { title: "Comments", dataIndex: "comments", key: "comments" },
              ]}
            />
          </div>
        )}
      </Modal>
    </ContainerTable>
  );
};

export default ProductException;
