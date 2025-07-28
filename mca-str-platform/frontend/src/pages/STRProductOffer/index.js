// STRProductOffer.js - Cleaned version

import React, { useEffect, useRef, useState } from "react";
import { Container } from "styles/pages/STR";
import DefaultTab from "components/DefaultTab";
import { tab_list } from "./data/tabs";

const STRProductOffer = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("0");
  const tabsRef = useRef([]);

  const handleSetActiveTab = (tabKey) => {
    const targetTab = tabsRef.current.find(tab => tab.key === tabKey);
    if (targetTab && !targetTab.disabled) {
      setActiveTab(tabKey);
    }
  };

  useEffect(() => {
    const tabData = tab_list(handleSetActiveTab);
    tabsRef.current = tabData;
    setTabs(tabData);
  }, []);

  useEffect(() => {
    if (tabs.length > 0) {
      handleSetActiveTab(tabs[0].key);
    }
  }, [tabs]);

  return (
    <div style={{ marginTop: "2%" }}>
      <Container>
        <div className="topsection">
          <div>
            <DefaultTab
              tabs={tabs}
              activeTab={activeTab}
              onChange={(key) => {
                const selectedTab = tabsRef.current.find(tab => tab.key === key);
                if (!selectedTab?.disabled) {
                  handleSetActiveTab(key);
                }
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default STRProductOffer;
