import React from "react";

import ProvideMissingDataContent from "../SubFeatutes/BuildEditPlanContent/SubFeatures/ProvideMissingDataContent";
import IngestDocumentsContent from "../SubFeatutes/BuildEditPlanContent/SubFeatures/IngestDocumentsContent";

export const step_list = [
  {
    key: "0",
    label: "Ingest Documents",
    content: <IngestDocumentsContent />,
  },
  {
    key: "1",
    label: "Provide Missing Data",
    content: <ProvideMissingDataContent />,
  },
  {
    key: "2",
    label: "Request Changes",
    content: "Request Changes Content",
  },
  {
    key: "3",
    label: "Pick Product Offer",
    content: "Pick Product Offer Content",
  },
  {
    key: "4",
    label: "Review Plan Order",
    content: "Review Plan Order Content",
  },
];
