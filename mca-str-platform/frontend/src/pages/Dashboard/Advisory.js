import React from "react";
//import { advisorColumns, advisorDataSource } from './DummyData'
import { ContainerTable } from "styles/components/Layout";
import TableComponent from "components/Table";
import { Input, Button, Space, Typography } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
export const advisorColumns = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Advisor Name",
    dataIndex: "advisorName",
    key: "advisorName",
    sorter: (a, b) => a.advisorName.localeCompare(b.advisorName),
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
    title: "Advisor Firm",
    dataIndex: "advisorFirm",
    key: "advisorFirm",
    sorter: (a, b) => a.advisorFirm.localeCompare(b.advisorFirm),
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
    title: "Proposals",
    dataIndex: "proposals",
    key: "proposals",
    sorter: (a, b) => a.proposals - b.proposals,
  },
  {
    title: "Wins",
    dataIndex: "wins",
    key: "wins",
    sorter: (a, b) => a.wins - b.wins,
    render: (text) => {
      let color = "#02A373";
      if (text < 7) color = "#EB5757";
      else if (text >= 8 && text <= 20) color = "#C3A606";
      return <span style={{ color, fontWeight: 700 }}>{text}</span>;
    },
  },
  {
    title: "Win Rate",
    dataIndex: "winRate",
    key: "winRate",
    sorter: (a, b) =>
      parseFloat(a.winRate.replace("%", "")) -
      parseFloat(b.winRate.replace("%", "")),
    render: (text) => {
      const value = parseFloat(text);
      let color = "#02A373";
      if (value < 26) color = "#EB5757";
      else if (value >= 26 && value <= 65) color = "#C3A606";
      return <span style={{ color, fontWeight: 700 }}>{text}</span>;
    },
  },
  {
    title: "% Wins by Exceptions",
    dataIndex: "exceptions",
    key: "exceptions",
    sorter: (a, b) =>
      parseFloat(a.exceptions.replace("%", "")) -
      parseFloat(b.exceptions.replace("%", "")),
    align: "center",
    render: (text) => {
      const value = parseFloat(text);
      let color = "#EB5757";
      if (value < 20) color = "#02A373";
      else if (value >= 8 && value <= 70) color = "#C3A606";
      return <span style={{ color, fontWeight: 700 }}>{text}</span>;
    },
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
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
    sorter: (a, b) =>
      parseFloat(a.totalAssets.replace(/[$,]/g, "")) -
      parseFloat(b.totalAssets.replace(/[$,]/g, "")),
    align: "right",
  },
];

export const advisorDataSource = [
  {
    key: "1",
    advisorName: "Andrews, Andy",
    advisorFirm: "Alliance Bernstein",
    proposals: "38",
    wins: 27,
    winRate: "71%",
    exceptions: "51%",
    totalAssets: "$150,750,982",
    revenue: "$1,246,272",
  },
  {
    key: "2",
    advisorName: "Braden, Brenda",
    advisorFirm: "American Century Investments",
    proposals: "43",
    wins: 31,
    winRate: "72%",
    exceptions: "8%",
    totalAssets: "$98,370,239",
    revenue: "$852,309",
  },
  {
    key: "3",
    advisorName: "Carmichael, David",
    advisorFirm: "Ameriprise Financial",
    proposals: "8",
    wins: 2,
    winRate: "25%",
    exceptions: "0%",
    totalAssets: "$2,182,030",
    revenue: "$15,323",
  },
  {
    key: "4",
    advisorName: "Dover, MaryAnn",
    advisorFirm: "BlackRock",
    proposals: "3",
    wins: 2,
    winRate: "67%",
    exceptions: "0%",
    totalAssets: "$1,992,004",
    revenue: "$16,271",
  },
  {
    key: "5",
    advisorName: "Echart, Stephen",
    advisorFirm: "Bridgewater Associates",
    proposals: "22",
    wins: 18,
    winRate: "82%",
    exceptions: "40%",
    totalAssets: "$53,908,230",
    revenue: "$433,004",
  },
  {
    key: "6",
    advisorName: "Franklin, Felicia",
    advisorFirm: "Charles Schwab Corporation",
    proposals: "12",
    wins: 6,
    winRate: "50%",
    exceptions: "14%",
    totalAssets: "$20,592,491",
    revenue: "$171,025",
  },
  {
    key: "7",
    advisorName: "Grover, Anderson",
    advisorFirm: "Dimensional Fund Advisors",
    proposals: "83",
    wins: 51,
    winRate: "61%",
    exceptions: "37%",
    totalAssets: "$188,762,387",
    revenue: "$1,584,082",
  },
  {
    key: "8",
    advisorName: "Henderson, Alex",
    advisorFirm: "Fidelity Investments",
    proposals: "13",
    wins: 8,
    winRate: "62%",
    exceptions: "12%",
    totalAssets: "$27,541,097",
    revenue: "$228,112",
  },
  {
    key: "9",
    advisorName: "Jackson, Robert",
    advisorFirm: "Franklin Templeton Investment",
    proposals: "17",
    wins: 4,
    winRate: "24%",
    exceptions: "50%",
    totalAssets: "$8,802,331",
    revenue: "$67,491",
  },
  {
    key: "10",
    advisorName: "Kendrick, Kendra",
    advisorFirm: "Guggenheim Partners",
    proposals: "4",
    wins: 2,
    winRate: "52%",
    exceptions: "100%",
    totalAssets: "$3,324,487",
    revenue: "$27,001",
  },
  {
    key: "11",
    advisorName: "Logan, Marshall",
    advisorFirm: "T.Rowe Price",
    proposals: "10",
    wins: 9,
    winRate: "90%",
    exceptions: "0%",
    totalAssets: "$17,933,210",
    revenue: "$142,880",
  },
];

const Advisory = ({ endOfLastMonth }) => {
  const { Text } = Typography;
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
              Advisor Effectiveness
            </span>

            <Space>
              <Text style={{ color: "#888888", fontWeight: 500 }}>
                trailing 12 month, as of {endOfLastMonth()}
              </Text>

              <Text>| 48 Advisors</Text>
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
        columns={advisorColumns}
        data={advisorDataSource}
      />
    </ContainerTable>
  );
};

export default Advisory;
