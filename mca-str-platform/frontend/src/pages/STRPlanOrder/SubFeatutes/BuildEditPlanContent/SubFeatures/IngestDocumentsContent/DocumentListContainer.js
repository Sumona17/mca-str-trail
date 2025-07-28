import React, { useEffect, useState } from "react";
import {
  DocumentListItemIconImg,
  IngestDocumentsDiv,
  MarginLeftContent,
} from "styles/pages/STRPlanOrder";
import DocumentListItemIcon from "assets/images/document-list-item-icon.png";
import { List } from "antd";
import { documentList } from "./data";

export default function DocumentListContainer() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    setDocuments(documentList);
  }, []);
  return (
    <div style={{ marginBottom: "24px" }}>
      <p
        style={{
          marginBottom: "12px",
          color: "#888888",
          fontSize: "14px",
          font: "Plus Jakarta Sans",
        }}
      >
        Upload documents specific to this plan.
      </p>
      <IngestDocumentsDiv>
        <MarginLeftContent>
          <h4
            style={{
              marginBottom: "16px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#101828",
            }}
          >
            Documents may include:
          </h4>

          <List
            dataSource={documents}
            renderItem={(item) => (
              <List.Item key={item.name}>
                <List.Item.Meta
                  avatar={
                    <DocumentListItemIconImg src={DocumentListItemIcon} />
                  }
                  title={
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#344054",
                      }}
                    >
                      {item.name}
                    </span>
                  }
                />
              </List.Item>
            )}
            split={false}
          />
        </MarginLeftContent>
      </IngestDocumentsDiv>
    </div>
  );
}
