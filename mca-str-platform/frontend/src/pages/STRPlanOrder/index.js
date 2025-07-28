import React, { useEffect, useState } from "react";
import { Container } from "styles/pages/STR";

import DefaultTab from "components/DefaultTab";

import { tab_list } from "./data/tabs";

const STRPlanOrder = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("0");

  useEffect(() => {
    setTabs(tab_list);
  }, []);

  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0].key);
    }
  }, [tabs]);

  return (
    <div style={{ marginTop: "2%" }}>
      <Container>
        <div className="topsection">
          <div>
            <DefaultTab tabs={tabs} activeTab={activeTab} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default STRPlanOrder;
