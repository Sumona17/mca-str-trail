import React, { useState, useMemo, useEffect } from "react";
import { Table, Typography, Input, Checkbox } from "antd";
import ExpandIcon from "assets/images/expand-blue.png";
import CollapseIcon from "assets/images/collapse-blue.png";
import { CenteredDiv, StyledLoanAdminRow } from "styles/pages/STRPlanOrder";
import "assets/css/loanvalidationtable.css";
import RequestExceptionButton from "./RequestExceptionButton";

const { Text } = Typography;

const LoanValidationTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const [loanValues, setLoanValues] = useState({
    general: 2,
    residence: 1,
  });
  const [sumTotal, setSumTotal] = useState(0);

  const [selectChecked, setSelectChecked] = useState(false);

  useEffect(() => {
    const totalCalculated = loanValues.general + loanValues.residence;
    setSumTotal(totalCalculated);
  }, [loanValues]);
  useEffect(() => {
    setSelectChecked(true);
  }, []);
  const onSelectChange = () => {
    setSelectChecked((prev) => !prev);
  };
  const handlePillChange = (type, value) => {
    const numValue = parseInt(value || 0);
    setLoanValues((prev) => ({
      ...prev,
      [type]: numValue,
    }));
  };

  const isExceeding = (type, max) => loanValues[type] > max;
  const isSubceeding = (type) => loanValues[type] < 0;

  const toggleExpand = (key) => {
    setExpandedRowKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const columns = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
      width: 300,
      render: (text, record) => {
        const obj = {
          children: (
            <div style={{ display: "flex", alignItems: "center" }}>
              {record.expandable && (
                <span
                  onClick={() => toggleExpand(record.key)}
                  style={{ cursor: "pointer", marginRight: 8 }}
                >
                  <img
                    src={
                      expandedRowKeys.includes(record.key)
                        ? CollapseIcon
                        : ExpandIcon
                    }
                    alt="toggle icon"
                    style={{ width: 16, height: 16 }}
                  />
                </span>
              )}
              <Text
                strong={!record.isChild && !record.isSubChild}
                style={{ color: "#0871C0" }}
              >
                {record.name}
              </Text>
            </div>
          ),
          props: {},
        };

        if (record.rowSpan) {
          obj.props.rowSpan = record.rowSpan;
        } else if (record.rowSpan === 0) {
          obj.props.rowSpan = 0;
        }

        return obj;
      },
    },
    {
      title: "Offer Rating",
      dataIndex: "offerRating",
      key: "offerRating",
      width: "10%",
      className: "column-lightgrey",
      render: (text, record) => {
        if (text === "LOANS_MERGE_CELL") {
          const totalCalculated = loanValues.general + loanValues.residence;
          setSumTotal(totalCalculated);
          const isTotalExceeding = totalCalculated > 3;
          const isTotalSubceeding = totalCalculated < 0;

          const PillRow = ({ label, valueKey, max }) => {
            const isInvalid =
              isExceeding(valueKey, max) || isSubceeding(valueKey);

            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 8,
                }}
              >
                <span style={{ width: 330 }}>{label}</span>
                <Input
                  type="number"
                  min={0}
                  value={loanValues[valueKey]}
                  onChange={(e) => handlePillChange(valueKey, e.target.value)}
                  className={`pill ${isInvalid ? "pill-error" : ""}`}
                  style={{ width: 60 }}
                />
                {isInvalid && (
                  <span
                    style={{
                      color: "red",
                      fontWeight: 400,
                      marginLeft: 200,
                      minWidth: 120,
                    }}
                  >
                    Exception Required
                  </span>
                )}
              </div>
            );
          };

          return {
            children: (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <PillRow
                  label="Maximum Number of general-purpose loans allowed:"
                  valueKey="general"
                  max={2}
                />
                <PillRow
                  label="Maximum Number of primary residence loans allowed:"
                  valueKey="residence"
                  max={1}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 8,
                  }}
                >
                  <span style={{ width: 330 }}>
                    Maximum Total loans allowed:
                  </span>
                  <Input
                    type="number"
                    value={totalCalculated}
                    disabled
                    className={`pill ${
                      isTotalExceeding || isTotalSubceeding ? "pill-error" : ""
                    }`}
                    style={{ width: 60 }}
                  />
                  {(isTotalExceeding || isTotalSubceeding) && (
                    <span
                      style={{
                        color: "red",
                        fontWeight: 400,
                        marginLeft: 200,
                        minWidth: 120,
                      }}
                    >
                      Exception Required
                    </span>
                  )}
                </div>
              </div>
            ),
            props: {
              colSpan: 6,
            },
          };
        }

        return {
          children: text,
          props: {
            rowSpan: record.mcaRowSpan ?? 1,
          },
        };
      },
    },
    ...["feeType", "feeRange", "select", "feeAmount", "comments"].map(
      (key) => ({
        title:
          key === "feeType"
            ? "Fee Type /Payor"
            : key === "feeRange"
            ? "Fee Range"
            : key === "select"
            ? "Select (all that apply)"
            : key === "feeAmount"
            ? "Fee Amt/Payor"
            : key === "comments"
            ? "Comments"
            : key.charAt(0).toUpperCase() + key.slice(1),
        dataIndex: key,
        key,
        width: key === "comments" ? "20%" : "10%",
        className:
          key === "feeType" || key === "feeRange"
            ? "column-lightgrey"
            : "column-lightblue",
        render: (text, record) => {
          if (record.offerRating === "LOANS_MERGE_CELL") {
            return {
              children: null,
              props: {
                colSpan: 0,
              },
            };
          }
          if (key === "select" && record.key === "1") {
            return {
              children: (
                <CenteredDiv>
                  <Checkbox
                    checked={selectChecked}
                    onChange={onSelectChange}
                  ></Checkbox>
                </CenteredDiv>
              ),
              props: {
                rowSpan: record[`${key}RowSpan`] ?? 1,
              },
            };
          }

          return {
            children: text,
            props: {
              rowSpan: record[`${key}RowSpan`] ?? 1,
            },
          };
        },
      })
    ),
  ];

  const baseData = [
    {
      key: "1",
      name: "Loan Administration",
      offerRating: "Acceptable",
      select: "Allowed",
      feeType: "Per Loan(Ppt)",
      feeRange: "$50-$150",
      feeAmount: "$100",
      comments: "",
      expandable: true,
      isParent: true,
    },
  ];

  const expandedData = [
    {
      key: "1-1",
      parent: "1",
      name: "Number of Loans Allowed",
      offerRating: "LOANS_MERGE_CELL",
      group: "admin",
      isChild: true,
    },
    {
      key: "3-1",
      parent: "3",
      name: "By Recordkeeper",
      offerRating: "Mkt Dem: M Sales Imp: M Ind Rating: A",

      feeType: "Per Loan(Plan)",
      feeRange: "$25 - $50",
      comments: "Available with limits",
      isChild: true,
    },
    {
      key: "3-2",
      parent: "3",
      name: "By Plan Sponsor",
      offerRating: "Mkt Dem: M Sales Imp: M Ind Rating: P",

      feeType: "Base",
      isChild: true,
    },
    {
      key: "3-3",
      parent: "3",
      name: "By TPA",
      offerRating: "Mkt Dem: H Sales Imp: H Ind Rating: B",
      providerDefault: "Preferred",
      rating: "Preferred",
      feeType: "Base",
      isChild: true,
    },
  ];

  const dataSource = useMemo(() => {
    let finalData = [];
    for (let row of baseData) {
      finalData.push({ ...row });
      if (row.expandable && expandedRowKeys.includes(row.key)) {
        const childRows = expandedData.filter(
          (item) => item.parent === row.key
        );
        finalData = finalData.concat(childRows);
      }
    }
    return finalData;
  }, [loanValues, expandedRowKeys]);

  const rowClassName = (record) => {
    if (record.key === "1") return "loan-admin-row";
    if (record.isParent) return "parent-row";
    if (record.isSubChild) return "sub-child-row";
    if (record.isChild || record.group === "admin") return "child-row";
    return "";
  };

  const styledRowKeys = [
    ...baseData.map((row) => row.key),
    ...expandedData.map((row) => row.key),
  ];

  const components = {
    body: {
      row: (props) => {
        const rowData = props["data-row-key"];
        if (styledRowKeys.includes(rowData)) {
          return <StyledLoanAdminRow {...props} />;
        }
        return <tr {...props} />;
      },
    },
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowClassName={rowClassName}
        rowKey="key"
        bordered
        components={components}
      />
      <div style={{ marginTop: "2%" }}>
        <RequestExceptionButton
          loanValues={{ ...loanValues, total: sumTotal }}
        />
      </div>
    </>
  );
};

export default LoanValidationTable;
