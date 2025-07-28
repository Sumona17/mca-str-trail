import React from "react";
import { Tabs } from "antd";
import useMetaData from "context/metaData";
import { StyledTabsContainer } from "styles/pages/STRPlanOrder";

const { TabPane } = Tabs;

const DefaultTab = ({ tabs, activeTab, onChange }) => {
  const { theme } = useMetaData();

  return (
    <StyledTabsContainer theme={theme}>
      <div className="stepper-container">
        <Tabs
          activeKey={activeTab}
          type="line"
          size="middle"
          onChange={onChange}
        >
          {tabs.map((tab) => (
            <TabPane
              key={tab.key}
              disabled={tab.disabled}
              tab={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: tab.disabled ? "not-allowed" : "pointer",
                    opacity: tab.disabled ? 0.5 : 1,
                  }}
                >
                  <span style={{ marginRight: 6 }}>
                    {activeTab === tab.key ? tab.activeIcon : tab.icon}
                  </span>
                  <span
                    style={{
                      color: tab.disabled
                        ? "rgb(155, 148, 148)"
                        : activeTab === tab.key
                        ? tab.color || "#1169a0"
                        : "#333",
                      fontWeight: activeTab === tab.key ? 700 : 500,
                    }}
                  >
                    {tab.label}
                  </span>
                </span>
              }
            >
              <>{tab.content}</>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </StyledTabsContainer>
  );
};

export default DefaultTab;
