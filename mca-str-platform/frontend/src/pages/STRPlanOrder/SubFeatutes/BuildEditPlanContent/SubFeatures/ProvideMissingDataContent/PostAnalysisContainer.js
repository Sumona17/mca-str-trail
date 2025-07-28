import React from "react";
import { MissingDataContainerDiv } from "styles/pages/STRPlanOrder";

export default function PostAnalysisContainer() {
  return (
    <MissingDataContainerDiv>
      <p style={{ display: "block" }}>Good news!</p>{" "}
      <p>
        Based upon the information provided for this proposal, this plan is a
        95% match for{" "}
        <a style={{ textDecoration: "underline", color: "inherit" }}>
          Product Offer B
        </a>
        . There is one exception required for this plan. See details below.
      </p>
    </MissingDataContainerDiv>
  );
}
