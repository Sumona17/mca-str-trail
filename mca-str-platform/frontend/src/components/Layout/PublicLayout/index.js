import React, { useState } from "react";
import { Layout,  } from "antd";
import PropTypes from "prop-types";

import Navbar from "components/Navbar/PublicNavbar";
import Footer from "components/Footer/PublicFooter";
import { MainSection } from "styles/components/Layout";
import useMetaData from "context/metaData";

const { Content } = Layout;

const PublicLayout = ({children}) => {
  const {theme} = useMetaData();
  const [collapsed, setCollapsed] = useState(true);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const [userDetails, setUserDetails] = useState({});

  const childrenToRender = React.Children.toArray(children);

  return (
    <MainSection theme={theme}>
    <div style={{ overflow: "hidden" }}>
      <Layout className="handle-sidebar">
        <Layout className="layout-composition" style={{ minHeight: "100vh" }}>
          <Navbar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            // colorBgContainer={colorBgContainer}
          />
          <Content
            className="mob-layout"
            style={{
              overflow: "auto",
              minHeight: 280,
              background: "transparent",
            }}
          >
            {childrenToRender.map((child) =>
              React.cloneElement(child, {
                userDetails,
                setUserDetails,
              })
            )}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
     </MainSection>
  );
};

PublicLayout.prototype = {
  collapsed: PropTypes.bool.isRequired,
};
export default PublicLayout;
