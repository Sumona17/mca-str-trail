import React, { useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Navbar from "components/Navbar/PrivateNavbar";
import Footer from "components/Footer/PrivateFooter";
import { MainSection } from "styles/components/Layout";
import useMetaData from "context/metaData";

const { Content } = Layout;

const PrivateLayout = ({ children }) => {
  const { theme } = useMetaData();
  const [collapsed, setCollapsed] = useState(true);

  const childrenToRender = React.Children.toArray(children);

  return (
    <MainSection theme={theme}>
      <div style={{ overflow: "hidden" }}>
        <Layout className="handle-sidebar">
          <Layout className="layout-composition">
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

            <Content
              theme={theme}
              className="mob-layout"
              style={{
                overflow: "auto",
                margin: "0px 0px 0px 0px",
                padding: 0,
                minHeight: 280,
                // background:'black',
                // background:`${theme === 'dark'? 'transparent':'white'}`
              }}
            >
              {childrenToRender.map((child) => React.cloneElement(child, {}))}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    </MainSection>
  );
};

PrivateLayout.prototype = {
  collapsed: PropTypes.bool.isRequired,
};
export default PrivateLayout;
