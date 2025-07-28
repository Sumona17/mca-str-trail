import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Grid,
  Menu,
  Popover,
  Space,
  theme,
  Badge,
  Card,
  Modal,
  Radio,
  Typography,
} from "antd";
import {
  MenuOutlined,
  CloseCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import SearchIcon from "assets/images/search-icon.png";
import SearchIconDark from "assets/images/search-dark.png";

import AddYourLogo from "assets/svg/add-your-logo.svg";
import STRLogo from "assets/svg/str-logo.svg";
import {
  NavbarHeader,
  Container,
  UserNameStyle,
  CloseButtonStyle,
  AvatarStyle,
} from "styles/components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import PopOverButtons from "components/Navbar/NavBarComponents/PopOverButtons";
import {
  NotificationAlertStyle,
  NotificationStyle,
} from "styles/components/Navbar";
import useMetaData from "context/metaData";
import NotificationTable from "./NavBarComponents/NotificationTable";
import notificationImage from "assets/images/notification_popup.png";
import redirect from "assets/images/share.png";
// import { LogoImage } from "styles/pages/STR";
import { userdata } from "./NavBarComponents/data/userdata";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function PrivateNavbar() {
  const { theme } = useMetaData();
  const { token } = useToken();
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const location = useLocation();

  const [popOverOpen, setPopOverOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("light");
  const [userDetails, setUserDetails] = useState({});
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const [currentMenuItemDetails, setCurrentMenuItemDetails] = useState({});

  const notifications = 1;

  const pathToKey = {
    "/": "dashboard",
    "/build-data-repository": "buildDataRepository",
    "/create-product-offer": "createProductOffer",
    "/configure-plan-order": "configurePlanOrder",
  };

  const keyToPath = {
    dashboard: "/",
    buildDataRepository: "/build-data-repository",
    createProductOffer: "/create-product-offer",
    configurePlanOrder: "/configure-plan-order",
  };

  useEffect(() => {
    setUserDetails(
      userdata?.filter((user) => user.path === location.pathname)?.[0]
    );
    setCurrentMenuItem(pathToKey[location.pathname] || "");
  }, [location.pathname]);

  const handlePopoverClose = () => setPopOverOpen(false);
  const handleOpenChange = (newOpen) => setPopOverOpen(newOpen);

  const onThemeChange = () => setIsModalOpen(true);

  const content = (
    <div className="user-profile-Modal">
      <div className="profile-iamge">
        <CloseButtonStyle theme={theme}>
          <Button icon={<CloseCircleOutlined />} onClick={handlePopoverClose} />
        </CloseButtonStyle>
        {Object.keys(userDetails).length > 0 ? (
          <span className="usericon">
            <img src={userDetails?.userPhoto} />
          </span>
        ) : (
          <AvatarStyle>
            <Avatar size={90}>{userDetails?.userName}</Avatar>
          </AvatarStyle>
        )}
      </div>
      <UserNameStyle theme={theme}>
        <Typography.Title level={4} className="user-role">
          {userDetails?.userRole}
        </Typography.Title>
      </UserNameStyle>
      <PopOverButtons theme={theme} onThemeChange={onThemeChange} />
    </div>
  );

  const handleRedirection = () => {
    navigate("/notificationDetails");
    setOpen(false);
  };

  const notificationContent = (
    <div>
      <img className="image" src={notificationImage} />
      <p className={`${theme === "dark" ? "sigin-title-dark" : "sigin-title"}`}>
        Tasks/Notifications{" "}
        <a onClick={() => handleRedirection()}>
          <img src={redirect} />
        </a>
      </p>
      <Card className="notification-card">
        <NotificationTable theme={theme} />
      </Card>
    </div>
  );

  const menuItems = [
    {
      label: "Dashboard",
      key: "dashboard",
      showLogo: false,
    },
    {
      label: "Build Data Repository",
      key: "buildDataRepository",
      showLogo: false,
    },
    {
      label: "Create Product Offer",
      key: "createProductOffer",
      showLogo: false,
    },
    {
      label: "Configure Plan Order ",
      key: "configurePlanOrder",
      showLogo: true,
    },
  ];

  const onClick = (e) => {
    setCurrentMenuItem(e.key);
    navigate(keyToPath[e.key]);
  };

  useEffect(() => {
    const menuItem = menuItems?.filter(
      (item) => item?.key == currentMenuItem
    )?.[0];
    setCurrentMenuItemDetails(menuItem);
    console.log(menuItem);
  }, [currentMenuItem]);

  const styles = {
    headercard: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: token.screenXL,
    },
    menu: {
      backgroundColor: "transparent",
      marginLeft: screens.md ? "0px" : `-${token.size}px`,
      width: screens.lg ? "inherit" : token.sizeXXL,
      color: "blue",
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",
      gap: 10,
      width: "100%",
    },
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.setItem("theme", selectedMode);
    window.location.reload();
  };

  const handleCancel = () => setIsModalOpen(false);
  const handleChange = (e) => setSelectedMode(e.target.value);

  return (
    <NavbarHeader theme={theme}>
      <Container>
        <nav>
          <div style={styles.headercard}>
            <div style={styles.menuContainer}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {currentMenuItemDetails?.showLogo == true ? (
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "contain",
                    }}
                    src={AddYourLogo}
                  />
                ) : (
                  <img
                    style={{ height: "40px", objectFit: "contain" }}
                    // src={MCALogo}
                  />
                )}

                <img
                  src={STRLogo}
                  alt="Retirement Logo"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              </div>
              <Menu
                className="custom-menu"
                style={styles.menu}
                mode="horizontal"
                items={menuItems}
                onClick={onClick}
                selectedKeys={screens.md ? [currentMenuItem] : ""}
                overflowedIndicator={
                  <Button
                    type="text"
                    icon={
                      <MenuOutlined
                        style={{ color: theme === "dark" ? "#fff" : "#000" }}
                      />
                    }
                  />
                }
              />
            </div>
            <Space>
              <div className="search-feild">
                <span className="search-icons">
                  {theme === "dark" ? (
                    <img src={SearchIconDark} />
                  ) : (
                    <img
                      src={SearchIcon}
                      style={{ width: "30px", height: "20px", marginTop: 5 }}
                    />
                  )}
                </span>
              </div>
              <Popover
                open={open}
                placement="bottom"
                content={notificationContent}
                trigger="click"
                overlayStyle={{ height: 150, maxWidth: 450, padding: 0 }}
                overlayClassName={
                  theme === "dark" ? "custom-pophover-dark-notification" : ""
                }
              >
                {notifications === 0 ? (
                  <NotificationStyle>
                    <Button
                      shape="circle"
                      icon={
                        <BellOutlined
                          style={{ color: "#1F6E7A", fontSize: "18px" }}
                        />
                      }
                      style={{ backgroundColor: "#E9F6FB", border: "none" }}
                    />
                  </NotificationStyle>
                ) : (
                  <NotificationAlertStyle>
                    <Badge count={notifications} size="small" offset={[-6, 7]}>
                      <Button
                        shape="circle"
                        icon={
                          <BellOutlined
                            style={{ color: "#1F6E7A", fontSize: "18px" }}
                          />
                        }
                        style={{ backgroundColor: "#E9F6FB", border: "none" }}
                      />
                    </Badge>
                  </NotificationAlertStyle>
                )}
              </Popover>
              <div className="search-box search">
                <Popover
                  theme={theme}
                  onOpenChange={handleOpenChange}
                  open={popOverOpen}
                  placement="bottom"
                  content={content}
                  trigger="click"
                  overlayClassName={
                    theme === "dark"
                      ? "custom-pophover-dark"
                      : "custom-pophover"
                  }
                >
                  <span style={{ cursor: "pointer" }}>
                    {Object.keys(userDetails).length > 0 ? (
                      <span className="usericon-wrapper">
                        <span className="usericon">
                          <img src={userDetails?.userPhoto} alt="User" />
                        </span>
                        <span className="user-role">
                          {userDetails?.userRole}
                        </span>
                      </span>
                    ) : (
                      <Avatar size={30}>{userDetails?.userName}</Avatar>
                    )}
                  </span>
                </Popover>
              </div>
            </Space>
          </div>
        </nav>
      </Container>
      <Modal
        title="Dark mode"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Radio.Group onChange={handleChange} value={selectedMode}>
          <Radio.Button value="light">☀️ Light</Radio.Button>
          <Radio.Button value="dark">🌙 Dark</Radio.Button>
        </Radio.Group>
      </Modal>
    </NavbarHeader>
  );
}
