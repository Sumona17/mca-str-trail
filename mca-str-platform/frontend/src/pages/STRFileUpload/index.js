import React, { useState, useMemo } from "react";
import { Container } from "styles/components/Layout";
import { useNavigate } from "react-router-dom";
import {
  Select,
  DatePicker,
  Input,
  Button,
  Alert,
  Row,
  Col,
  Card,
  Table,
  Typography
} from "antd";
import {
  SearchOutlined,
  UploadOutlined,
  CloseOutlined,
  DownloadOutlined,
  ReloadOutlined,
  CaretDownFilled,
} from "@ant-design/icons";
import FileUploadContainer from "../STRFileUpload/UploadedFileSection/FileUploadContainer";
import SecondScreen from "./UploadedFileSection/UploadScreen";


import {
  columns,
  dataSource,
  actionItemColumns,
  actionItemsDataSource,
  getFilterOptions,
  getDashboardStats,
} from "pages/STRFileUpload/dummyData";

import {


  FilterSection,

  AlertBanner,
  TableContainer,
  Tabletitle,
  Overlay,
  OverlayContent,
  CloseBtn,
} from "styles/pages/STRFileUpload/index";
import {
  DashboardCard,
  DashboardSection,
  BannerImage,

} from "styles/pages/Dashboard";
import useMetaData from "context/metaData";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text } = Typography;
const ManageFileUpload = () => {
  const { theme } = useMetaData();
  const navigate = useNavigate();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const [filters, setFilters] = useState({
    planType: undefined,
    product: undefined,
    otherFilters: undefined,
    riskLevel: undefined,
    category: undefined,
    status: undefined,
    dueDate: undefined,
    searchText: "",
  });

  const [actionFilters, setActionFilters] = useState({
    riskLevel: undefined,
    category: undefined,
    status: undefined,
    dueDate: undefined,
    otherFilters: undefined,
    searchText: "",
  });

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const [actionPagination, setActionPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const [showAlert, setShowAlert] = useState(true);
  const [showUpload, setShowUpload] = useState(false);

  // Check if any filters are applied for Plans section
  const hasPlansFiltersApplied = useMemo(() => {
    return !!(
      filters.planType ||
      filters.product ||
      filters.otherFilters ||
      filters.searchText
    );
  }, [filters]);

  // Check if any filters are applied for Action Items section
  const hasActionFiltersApplied = useMemo(() => {
    return !!(
      actionFilters.riskLevel ||
      actionFilters.category ||
      actionFilters.status ||
      actionFilters.dueDate ||
      actionFilters.otherFilters ||
      actionFilters.searchText
    );
  }, [actionFilters]);

  const editData = (route, data) => {
    navigate(route, {
      state: data,
    });
  };

  const handleFileUpload = (files) => {
    setUploadedFile(files[0]);
    setShowUpload(false);
    setIsUploading(true); // Show UploadScreen
  };

  const handleBackToMain = () => {
    setIsUploading(false);
    setUploadedFile(null);
  };

  const filterOptions = getFilterOptions();
  const dashboardStats = getDashboardStats();

  const filteredPlansData = useMemo(() => {
    return dataSource.filter((item) => {
      const matchesSearch =
        !filters.searchText ||
        Object.values(item).some((value) =>
          value
            ?.toString()
            .toLowerCase()
            .includes(filters.searchText.toLowerCase())
        );

      const matchesPlanType =
        !filters.planType || item.planType === filters.planType;
      const matchesProduct =
        !filters.product || item.product === filters.product;
      const matchesOtherFilters =
        !filters.otherFilters ||
        (filters.otherFilters === "active" && item.actionItems === 0) ||
        (filters.otherFilters === "inactive" && item.actionItems > 0);

      return (
        matchesSearch &&
        matchesPlanType &&
        matchesProduct &&
        matchesOtherFilters
      );
    });
  }, [filters]);

  const filteredActionItems = useMemo(() => {
    return actionItemsDataSource.filter((item) => {
      const matchesSearch =
        !actionFilters.searchText ||
        Object.values(item).some((value) =>
          value
            ?.toString()
            .toLowerCase()
            .includes(actionFilters.searchText.toLowerCase())
        );

      const matchesRiskLevel =
        !actionFilters.riskLevel || item.riskLevel === actionFilters.riskLevel;
      const matchesCategory =
        !actionFilters.category || item.category === actionFilters.category;
      const matchesStatus =
        !actionFilters.status || item.status === actionFilters.status;
      const matchesOtherFilters =
        !actionFilters.otherFilters ||
        (actionFilters.otherFilters === "urgent" &&
          item.riskLevel === "High") ||
        (actionFilters.otherFilters === "normal" && item.riskLevel !== "High");

      const matchesDueDate =
        !actionFilters.dueDate ||
        (actionFilters.dueDate &&
          actionFilters.dueDate.length === 2 &&
          new Date(item.dueDate) >= actionFilters.dueDate[0].toDate() &&
          new Date(item.dueDate) <= actionFilters.dueDate[1].toDate());

      return (
        matchesSearch &&
        matchesRiskLevel &&
        matchesCategory &&
        matchesStatus &&
        matchesOtherFilters &&
        matchesDueDate
      );
    });
  }, [actionFilters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleActionFilterChange = (key, value) => {
    setActionFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    setActionPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleSearch = (value) => {
    setFilters((prev) => ({
      ...prev,
      searchText: value,
    }));
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleActionSearch = (value) => {
    setActionFilters((prev) => ({
      ...prev,
      searchText: value,
    }));
    setActionPagination((prev) => ({ ...prev, current: 1 }));
  };

  const resetFilters = () => {
    setFilters({
      planType: undefined,
      product: undefined,
      otherFilters: undefined,
      riskLevel: undefined,
      category: undefined,
      status: undefined,
      dueDate: undefined,
      searchText: "",
    });
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  const resetActionFilters = () => {
    setActionFilters({
      riskLevel: undefined,
      category: undefined,
      status: undefined,
      dueDate: undefined,
      otherFilters: undefined,
      searchText: "",
    });
    setActionPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleUploadClick = () => {
    setShowUpload(true);
  };
  const closeOverlay = () => {
    setShowUpload(false);
  };


const tableColumns = columns(
  pagination.current,
  pagination.pageSize,
  editData,
  "plans"
);

const actionTableColumns = actionItemColumns(
  actionPagination.current,
  actionPagination.pageSize,
  editData,
  "actionItems"
);

  // If uploading, show the second screen
  if (isUploading) {
    return (
      <SecondScreen
        uploadedFile={uploadedFile}
        onBack={handleBackToMain}
        theme={theme}
      />
    );
  }
  return (
    <DashboardSection theme={theme}>
      <BannerImage theme={theme} style={{height:"250px"}}>
        <Container>
          <Row>
            <Col span={16} style={{marginTop:20}}>
              <p className="subtitle">Welcome</p>
              <h3 className="name">Client Manager</h3>
               <p className="content">Your Portfolio as of 5/31/25</p>
           </Col>
           

          </Row>
        </Container>
      </BannerImage>

      <DashboardCard theme={theme} style={{ marginTop: 0 }}>
        <Container>
          <Row gutter={16} className="mt-negative">
            <Col className="gutter-row" span={8} style={{marginTop:50}}>
              <Card style={{ background: '#eef6ff' }}>
                <div>
                  <Text style={{ fontSize: 12, fontWeight: 500 }}>
                    TOTAL ASSETS:
                  </Text>
                  <div className="card-content">
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dashboardStats.totalAssets}</Text>
                    <div className="card-row">

                      <p className="card-desc">
                       Year to date assets net gain/loss of your plan portfolio:
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "4px 10px",
                          border: "1px solid   #c62828",
                          backgroundColor: " #ffebee",
                          borderRadius: "6px",
                          color: " #c62828",
                          fontWeight: 600,
                          fontSize: 14,
                          marginTop: '15px',
                          marginLeft:'10px'
                        }}
                      >
                        <CaretDownFilled
                          style={{
                            color: " #c62828",
                            fontSize: 16,
                            marginRight: 4,
                          }}
                        />
                        -$12.8M
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={8} style={{marginTop:50}}>
              <Card style={{ background: '#eef6ff' }}>
                <div>
                  <Text style={{ fontSize: 12, fontWeight: 500 }}>
                    TOTAL PLANS:
                  </Text>
                  <div className="card-content">
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dashboardStats.totalPlans}</Text>
                    <div className="card-row">

                      <p className="card-desc">
                       Year to date number of plans net gain/loss of your plan portfolio:
                      </p>
                       <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "4px 10px",
                          border: "1px solid   #c62828",
                          backgroundColor: " #ffebee",
                          borderRadius: "6px",
                          color: " #c62828",
                          fontWeight: 600,
                          fontSize: 14,
                          marginTop: '15px',
                          marginLeft:'10px'
                        }}
                      >
                        <CaretDownFilled
                          style={{
                            color: " #c62828",
                            fontSize: 16,
                            marginRight: 4,
                          }}
                        />
                        -1
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col className="gutter-row" span={8} style={{marginTop:50}}>
              <Card style={{ background: '#eef6ff' }}>
                <div>
                  <Text style={{ fontSize: 12, fontWeight: 500 }}>
                    TOTAL PARTICIPANTS:
                  </Text>
                  <div className="card-content">
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dashboardStats.totalParticipants.toLocaleString()}</Text>
                    <div className="card-row">

                      <p className="card-desc">
                       Year to date number of participants with a net balance gain/loss of your plan portfolio:
                      </p>
                       <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "4px 10px",
                          border: "1px solid #c62828",
                          backgroundColor: " #ffebee",
                          borderRadius: "6px",
                          color: " #c62828",
                          fontWeight: 600,
                          fontSize: 14,
                          marginTop: '15px',
                          marginLeft:'10px'
                        }}
                      >
                        <CaretDownFilled
                          style={{
                            color: " #c62828",
                            fontSize: 16,
                            marginRight: 4,
                          }}
                        />
                        -823
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

         

          <TableContainer theme={theme}>
            <Tabletitle>
              <Row gutter={[8, 8]} align="middle" wrap>
                <Col
                  flex="auto"
                  style={{ color: "#fff", fontSize: "24px", lineHeight: "22px" }}
                >
                  Action Items
                </Col>
                <Col flex="none">
                  <div
                    style={{ color: "#fff", fontSize: "14px", marginTop: "4px" }}
                  >
                    17 actions needed for 10 plans
                  </div>
                </Col>
              </Row>
            </Tabletitle>

            <FilterSection theme={theme}>
              <Row gutter={[8, 8]} align="middle" wrap>
                <Row gutter={[24, 24]} align="middle" wrap>
                  <Col flex="none">
                    <Select
                      placeholder="Risk Level"
                      value={actionFilters.riskLevel}
                      onChange={(value) =>
                        handleActionFilterChange("riskLevel", value)
                      }
                      style={{ width: 130 }}
                      allowClear
                    >
                      {filterOptions.riskLevels.map((level) => (
                        <Option key={level} value={level}>
                          {level}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col flex="none">
                    <Select
                      placeholder="Category"
                      value={actionFilters.category}
                      onChange={(value) =>
                        handleActionFilterChange("category", value)
                      }
                      style={{ width: 130 }}
                      allowClear
                    >
                      {filterOptions.categories.map((category) => (
                        <Option key={category} value={category}>
                          {category}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col flex="none">
                    <Select
                      placeholder="Status"
                      value={actionFilters.status}
                      onChange={(value) =>
                        handleActionFilterChange("status", value)
                      }
                      style={{ width: 130 }}
                      allowClear
                    >
                      {filterOptions.statuses.map((status) => (
                        <Option key={status} value={status}>
                          {status}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col flex="none">
                    <RangePicker
                      placeholder={["Start Date", "End Date"]}
                      value={actionFilters.dueDate}
                      onChange={(dates) =>
                        handleActionFilterChange("dueDate", dates)
                      }
                      style={{
                        width: 210,
                        height: 34,

                        padding: '0 16px',
                        fontSize: 14,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </Col>
                  <Col flex="none">
                    <Select
                      placeholder="Other Filters"
                      value={actionFilters.otherFilters}
                      onChange={(value) =>
                        handleActionFilterChange("otherFilters", value)
                      }
                      style={{ width: 130 }}
                      allowClear
                    >
                      <Option value="urgent">Urgent</Option>
                      <Option value="normal">Normal</Option>
                    </Select>
                  </Col>
                  <Col flex="none">
                    <Button
                      onClick={resetActionFilters}
                      className="reset-btn"
                      icon={<ReloadOutlined />}
                      disabled={!hasActionFiltersApplied}
                    >
                      Reset Filters
                    </Button>
                  </Col>
                </Row>
              </Row>

              <Row
                justify="space-between"
                align="middle"
                style={{ marginTop: 16 }}
              >
                <Col>

                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
                <Col>
                  <Row gutter={12} align="middle">
                    <Col>
                      <Button
                        type="primary"
                        icon={<UploadOutlined />}
                        style={{ backgroundColor: "black" }}
                        onClick={handleUploadClick}
                      >
                        Upload File
                      </Button>

                      {showUpload && (
                        <Overlay>
                          <OverlayContent>
                            <CloseBtn onClick={closeOverlay}>×</CloseBtn>
                            <FileUploadContainer
                              onFileUpload={handleFileUpload}
                              onUploadComplete={() => {
                                setShowUpload(false);
                                setIsUploading(true);
                              }}
                            />
                          </OverlayContent>
                        </Overlay>
                      )}
                    </Col>
                    <Col>
                      <Input.Search
                        placeholder="Search"
                        value={actionFilters.searchText}
                        onChange={(e) => handleActionSearch(e.target.value)}
                        onSearch={handleActionSearch}
                        style={{ width: 200 }}
                        enterButton={<SearchOutlined />}
                      />
                    </Col>
                    <Col>
                      <Button
                        icon={<DownloadOutlined />}
                        className="download-btn"
                      >
                        Download
                      </Button>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </FilterSection>

            <div className="ant-table-wrapper">
              <Table
                columns={actionTableColumns}
                dataSource={filteredActionItems}
                pagination={{
                  ...actionPagination,
                  total: filteredActionItems.length,
                  onChange: (page, pageSize) => {
                    setActionPagination((prev) => ({
                      ...prev,
                      current: page,
                      pageSize,
                    }));
                  },
                  onShowSizeChange: (current, size) => {
                    setActionPagination((prev) => ({
                      ...prev,
                      current: 1,
                      pageSize: size,
                    }));
                  },
                }}
                scroll={{ x: "max-content" }}
                size="middle"
              />
            </div>
          </TableContainer>

           <TableContainer theme={theme}>
            <div className="table-header">
              <Tabletitle>Your Plans </Tabletitle>
            </div>

            <FilterSection theme={theme}>
              <Row gutter={[12, 12]} align="middle" justify="space-between">
                <Col>
                  <Row gutter={24} align="middle">
                    <Col>
                      <Select
                        placeholder="Plan Type"
                        value={filters.planType}
                        onChange={(value) =>
                          handleFilterChange("planType", value)
                        }
                        style={{ width: 120 }}
                        allowClear
                      >
                        {filterOptions.planTypes.map((type) => (
                          <Option key={type} value={type}>
                            {type}
                          </Option>
                        ))}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        placeholder="Product"
                        value={filters.product}
                        onChange={(value) => handleFilterChange("product", value)}
                        style={{ width: 120 }}
                        allowClear
                      >
                        {filterOptions.products.map((product) => (
                          <Option key={product} value={product}>
                            {product}
                          </Option>
                        ))}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        placeholder="Other Filters"
                        value={filters.otherFilters}
                        onChange={(value) =>
                          handleFilterChange("otherFilters", value)
                        }
                        style={{ width: 120 }}
                        allowClear
                      >
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                      </Select>
                    </Col>
                    <Col>
                      <Button
                        onClick={resetFilters}
                        className="reset-btn"
                        icon={<ReloadOutlined />}
                        disabled={!hasPlansFiltersApplied}
                      >
                        Reset Filters
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row gutter={8} align="middle">
                    <Col>
                      <Input.Search
                        placeholder="Search"
                        value={filters.searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        onSearch={handleSearch}
                        style={{ width: 200 }}
                        enterButton={<SearchOutlined />}
                      />
                    </Col>
                    <Col>
                      <Button
                        icon={<DownloadOutlined />}
                        className="download-btn"
                      >
                        Download
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FilterSection>

            <div className="ant-table-wrapper">
              <Table
                columns={tableColumns}
                dataSource={filteredPlansData}
                pagination={{
                  ...pagination,
                  total: filteredPlansData.length,
                  onChange: (page, pageSize) => {
                    setPagination((prev) => ({
                      ...prev,
                      current: page,
                      pageSize,
                    }));
                  },
                  onShowSizeChange: (current, size) => {
                    setPagination((prev) => ({
                      ...prev,
                      current: 1,
                      pageSize: size,
                    }));
                  },
                }}
                scroll={{ x: "max-content" }}
                size="middle"
              />
            </div>
          </TableContainer>
        </Container>
      </DashboardCard>
    </DashboardSection>


  );
};

export default ManageFileUpload;